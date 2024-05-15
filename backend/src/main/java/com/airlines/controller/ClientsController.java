package com.airlines.controller;

import ch.qos.logback.core.model.Model;
import ch.qos.logback.core.testUtil.RandomUtil;
import com.airlines.emailverification.EmailVerificationResponse;
import com.airlines.exception.ClientNotFoundException;
import com.airlines.model.Client;
import com.airlines.service.ClientService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import nonapi.io.github.classgraph.fileslice.reader.RandomAccessArrayReader;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.mail.SimpleMailMessage;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

import java.util.UUID;


import static org.springframework.hateoas.server.reactive.WebFluxLinkBuilder.linkTo;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class ClientsController {

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private ClientService clientService;
    private final String apiKey = "bd563713ec75f13ff436f0846aeaa2e626d1e7f7"; // Remplacez par votre clé API de Hunter.io


    @GetMapping("/clients")
    public List<Client> listClient(){
        return clientService.getClients();

    }
    @GetMapping("/connexion")
    public Object connexionClient(@RequestParam("email") String email,@RequestParam("password") String password){
        return clientService.Connexion(email,password);
    }
    @GetMapping("/clients/{id}")
    public Object oneClient(@PathVariable Long id){
        return clientService.oneClient(id);
    }
    @PostMapping("/inscription")
    public Object inscriptionClient(@RequestBody Client client,
                                    BindingResult bindingResult) {


     return clientService.Inscription(client.getNom(),client.getPrenom(),client.getEmail(),client.getTel(),client.getPassword());

    }
    @GetMapping("/emailexistance/{email}")
    private boolean EmailExist(@PathVariable String email) {

        return clientService.ifClientExist(email);
    }
    @GetMapping("/emailvalidation/{email}")
    private boolean verifyEmail(@PathVariable String email) {
        String apiUrl = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=" + apiKey;

        RestTemplate restTemplate = new RestTemplate();
        EmailVerificationResponse response = restTemplate.getForObject(apiUrl, EmailVerificationResponse.class);

        // Vérifier si l'email est valide en fonction de la réponse de l'API
        return response != null && response.getData().getStatus().equals("valid") && response.getData().getResult().equals("deliverable");
    }



    @GetMapping("/forgot_password")
    public String showForgotPasswordForm() {
        return "forgot_password_form";
    }

    @PostMapping("/forgot_password")
    public String processForgotPassword(HttpServletRequest request, Model model) {
        String email = request.getParameter("email");
        String token = UUID.randomUUID().toString();


        try {
            clientService.updateResetPasswordToken(token, email);
            String resetPasswordLink = Utility.getSiteURL(request) + "/api/reset_password?token=" + token;
            sendEmail(email, resetPasswordLink);
            model.addText(" We have sent a reset password link to your email. Please check.");
            return "forgot_password";

        } catch (ClientNotFoundException ex) {
            model.addText(ex.getMessage());
        } catch (UnsupportedEncodingException | MessagingException e) {
            return "Error while sending email";
        }

        return "password_form";
    }

    public void sendEmail(String recipientEmail, String link)throws MessagingException, UnsupportedEncodingException {



        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("moroccopalace2023@gmail.com", "SkyLink");
        helper.setTo(recipientEmail);

        String subject = "Here's the link to reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Click the link below to change your password:</p>"
                + "<a href=\"" + link + "\">Change my password</a>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }


    @GetMapping("/reset_password")
    public String showResetPasswordForm(@Param(value = "token") String token, Model model) {
        Client client = clientService.getByResetPasswordToken(token);
        model.addText(token);

        if (client == null) {
            model.addText("Invalid Token");
            return "message";
        }

        return "reset_password_form";
    }

    @PostMapping("/reset_password")
    public String processResetPassword(HttpServletRequest request, Model model) {
        String token = request.getParameter("token");
        String password = request.getParameter("password");

        Client client = clientService.getByResetPasswordToken(token);
        model.addText("Reset your password");

        if (client == null) {
            model.addText("Invalid Token");
            return "Invalid Token";
        } else {
            clientService.updatePassword(client, password);

            model.addText("You have successfully changed your password.");
            return "password updated successfully";
        }


    }
}

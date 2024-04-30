package com.airlines.controller;

import com.airlines.emailverification.EmailVerificationResponse;
import com.airlines.model.Client;
import com.airlines.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

import static org.springframework.hateoas.server.reactive.WebFluxLinkBuilder.linkTo;

@RestController
@RequestMapping("/api")

public class ClientsController {

    @Autowired
    private ClientService clientService;
    private final String apiKey = "bd563713ec75f13ff436f0846aeaa2e626d1e7f7"; // Remplacez par votre clé API de Hunter.io


    @GetMapping("/clients")
    public List<Client> listClient(){
        return clientService.getClients();

    }
    @GetMapping("/connexion")
    public Optional<Client> connexionClient(@RequestParam("email") String email,@RequestParam("password") String password){
        return clientService.Connexion(email,password);
    }
    @GetMapping("/clients/{id}")
    public Optional<Client> oneClient(@PathVariable Long id){
        return clientService.oneClient(id);
    }
    @PostMapping("/inscription")
    public Object inscriptionClient(@RequestParam("email") String email,
                                    @RequestParam("nom") String nom,
                                    @RequestParam("prenom") String prenom,
                                    @RequestParam("tel") String tel,
                                    @RequestParam("password") String password) {


        // Effectuer la vérification de l'email en utilisant l'API de Hunter.io
        boolean isEmailVerified = verifyEmail(email);

        if (isEmailVerified) {

            if(clientService.ifClientExist(email)){
                return "this account already exist";
            }

            else return clientService.Inscription(nom,prenom,email,tel,password);
        } else {
            return "email invalid";
        }
    }

    private boolean verifyEmail(String email) {
        String apiUrl = "https://api.hunter.io/v2/email-verifier?email=" + email + "&api_key=" + apiKey;

        RestTemplate restTemplate = new RestTemplate();
        EmailVerificationResponse response = restTemplate.getForObject(apiUrl, EmailVerificationResponse.class);

        // Vérifier si l'email est valide en fonction de la réponse de l'API
        return response != null && response.getData().getStatus().equals("valid") && response.getData().getResult().equals("deliverable");
    }
}

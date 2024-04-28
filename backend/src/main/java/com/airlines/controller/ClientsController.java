package com.airlines.controller;

import com.airlines.emailverification.EmailVerificationResponse;
import com.airlines.model.Client;
import com.airlines.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.springframework.hateoas.server.reactive.WebFluxLinkBuilder.linkTo;

@RestController
@RequestMapping("/api/clients")

public class ClientsController {

    @Autowired
    private ClientService clientService;
    private final String apiKey = "bd563713ec75f13ff436f0846aeaa2e626d1e7f7"; // Remplacez par votre clé API de Hunter.io


    @GetMapping("/allClients")
    public List<Client> listClient(){
        return clientService.getClients();

    }
    @GetMapping("/connexion/{email}{password}")
    public Client connexionClient(@PathVariable String email,@PathVariable String password){
        return clientService.Connexion(email,password);
    }
    @PostMapping("/inscription")
    public ResponseEntity<?> inscriptionClient(@RequestParam("email") String email,
                                               @RequestParam("nom") String nom,
                                               @RequestParam("prenom") String prenom,
                                               @RequestParam("tel") String tel,
                                               @RequestParam("password") String password,
                                               BindingResult bindingResult) {


        // Effectuer la vérification de l'email en utilisant l'API de Hunter.io
        boolean isEmailVerified = verifyEmail(email);

        if (isEmailVerified) {

            clientService.Inscription(nom,prenom,email,tel,password);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.badRequest().build();
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

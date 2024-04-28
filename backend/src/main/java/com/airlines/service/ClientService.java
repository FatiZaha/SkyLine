package com.airlines.service;

import com.airlines.model.Client;
import com.airlines.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;


    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    public Client Inscription(String nom, String prenom, String email, String tel, String password) {
        Client client = new Client(nom, prenom, email, tel, password);
        return clientRepository.save(client);
    }

    public Client Connexion(String email, String password) {
        return clientRepository.findByEmailAndPassword(email, password);

    }

}
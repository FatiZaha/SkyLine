package com.airlines.service;

import com.airlines.exception.ClientNotFoundException;
import com.airlines.model.Client;
import com.airlines.repository.ClientRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
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

    public Optional<Client> Connexion(String email, String password) {
        return clientRepository.findByEmailAndPassword(email, password);

    }


    public Optional<Client> oneClient(Long id) {
        return clientRepository.findById(id);

    }
    public boolean ifClientExist(String email){
        return clientRepository.findClientByEmail(email).isPresent();
    }

    public Optional<Client> getClientByEmail(String email){
        return clientRepository.findClientByEmail(email);
    }

    public void updateResetPasswordToken(String token, String email) throws ClientNotFoundException {
        Optional<Client> client = clientRepository.findClientByEmail(email);
        if (client.isPresent()) {
            clientRepository.updateClientById(token,client.get().getId());

        } else {
            throw new ClientNotFoundException("Could not find any customer with the email " + email);
        }
    }

    public Client getByResetPasswordToken(String token) {
        return clientRepository.findClientByResetPasswordToken(token);
    }

    public void updatePassword(Client client, String newPassword) {
        //BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //String encodedPassword = passwordEncoder.encode(newPassword);
        clientRepository.updateClientById(null,client.getId());
        clientRepository.updateById(newPassword,client.getId());

    }

}
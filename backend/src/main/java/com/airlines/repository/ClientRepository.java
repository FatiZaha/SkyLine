package com.airlines.repository;

import com.airlines.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {
    public Optional<Client> findByEmailAndPassword(String username, String pwd);

    public Client findClientByEmail(String email);
}

package com.airlines.repository;

import com.airlines.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {
    public Client findByEmailAndPassword(String username,String pwd);

}

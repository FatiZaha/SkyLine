package com.airlines.repository;

import com.airlines.model.Client;
import com.airlines.model.EtatPaiement;
import com.airlines.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {
    public Optional<Client> findByEmailAndPassword(String username, String pwd);

    public Client findClientById(Long id);
    public Optional<Client> findClientByEmail(String email);
    public Client findClientByResetPasswordToken(String token);

    @Modifying
    @Query("UPDATE Client c SET c.resetPasswordToken = :token WHERE c.id = :id")
    public void updateClientById(@Param("token") String token, @Param("id") Long id);

    @Modifying
    @Query("UPDATE Client c SET c.password = :password WHERE c.id = :id")
    public void updateById(@Param("password") String password, @Param("id") Long id);
}

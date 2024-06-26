package com.airlines.repository;

import com.airlines.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {
    public Optional<Admin> findByLoginAndPassword(String username, String pwd);
    public Optional<Admin> findAdminById(Long id);
}

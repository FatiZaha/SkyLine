package com.airlines.repository;

import com.airlines.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    public Admin findByLoginAndPassword(String username,String pwd);
}

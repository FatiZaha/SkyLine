package com.airlines.service;
import com.airlines.model.Admin;
import com.airlines.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Optional<Admin> getAdmin(String login, String password){
        return adminRepository.findByLoginAndPassword(login,password);
    }
    public Optional<Admin> getAdminById(Long id){
        return adminRepository.findById(id);
    }
}

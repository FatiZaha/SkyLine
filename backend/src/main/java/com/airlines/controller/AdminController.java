package com.airlines.controller;

import com.airlines.model.Admin;
import com.airlines.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/admin")
    public Optional<Admin> connexionAdmin(@RequestParam("login")String login,
                                          @RequestParam("password")String password){
        return adminService.getAdmin(login,password);
    }

    @GetMapping("/admin/{id}")
    public Optional<Admin> getAdmin(@PathVariable Long id){
        return adminService.getAdminById(id);
    }
}

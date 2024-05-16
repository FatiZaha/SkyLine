package com.airlines.controller;

import com.airlines.model.Compagnie;
import com.airlines.model.Ville;
import com.airlines.model.Vol;
import com.airlines.service.AdminService;
import com.airlines.service.CompagnieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import  org.springframework.http.MediaType;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/", produces = MediaType.APPLICATION_JSON_VALUE)
public class CompagniesController {

    @Autowired
    private CompagnieService compagnieService;
    @Autowired
    private AdminService adminService;

    @PostMapping("/admin/{id}/compagnies/add")
    public ResponseEntity<?> addCompagnie(@PathVariable Long id,@RequestBody Compagnie compagnie, BindingResult bindingResult) {

        if (compagnie.getNom() == null || compagnie.getAdresse() == null || compagnie.getLogo() == null || compagnie.getTel() == null || compagnie.getTel().isEmpty()) {
            return ResponseEntity.badRequest().body("Tous les champs sont obligatoires.");
        }
        compagnie.setAdmin(adminService.getAdminById(id).get());

        compagnieService.saveCompagnie(compagnie);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @PutMapping("/admin/{id}/compagnies/update/{codeCompagnie}")
    public ResponseEntity<String> updateCompagnie(
            @PathVariable("id") Long id,
            @PathVariable("codeCompagnie") Long codeCompagnie,
            @RequestBody Compagnie request) {

        // Vérifier si la compagnie existe
        Compagnie existingCompany = compagnieService.getCompagnyCode(codeCompagnie);
        if (existingCompany == null) {
            return ResponseEntity.notFound().build();
        }

        // Vérifier si les champs obligatoires sont vides
        if (request.getNom() == null || request.getNom().isEmpty()
                || request.getAdresse() == null || request.getAdresse().isEmpty()
                || request.getTel() == null || request.getTel().isEmpty()) {
            return ResponseEntity.badRequest().body("Tous les champs sont obligatoires.");
        }

        // Mettre à jour les informations de la compagnie
        compagnieService.updateCompagnie(
                codeCompagnie,
                request.getNom(),
                request.getAdresse(),
                request.getTel(),
                request.getLogo());

        return ResponseEntity.ok("Compagnie mise à jour avec succès.");
    }

    @DeleteMapping("/admin/{id}/compagnies/delete/{codeCompagnie}")
    public ResponseEntity<?> deleteCompagny(@PathVariable("codeCompagnie") Long codeCompagnie) {
        compagnieService.deleteCompagnie(codeCompagnie);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/nom")
    public Compagnie GetCompanyName(String nom){
        return compagnieService.getCompagnyName(nom);
    }
    @GetMapping("/admin/{id}/compagnies/all")
    public List<Compagnie> GetAllCompagnies(){
        return compagnieService.getAllCompanies();
    }
}

package com.airlines.controller;

import com.airlines.model.Compagnie;
import com.airlines.model.Ville;
import com.airlines.model.Vol;
import com.airlines.service.CompagnieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@RestController
@RequestMapping("/api/compagnies")
public class CompagniesController {

    @Autowired
    private CompagnieService compagnieService;

    @PostMapping("/add")
    public ResponseEntity<?> addCompagnie(@RequestBody Compagnie compagnie, BindingResult bindingResult) {

        if (compagnie.getNom()== null || (compagnie.getAdresse() == null) || (compagnie.getTel() == null) || (compagnie.getLogo() == null)) {
            return ResponseEntity.badRequest().build();
        }

        compagnieService.saveCompagnie(compagnie);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @PutMapping("/{codeVol}")
    public ResponseEntity<String> updateCompagnie(@PathVariable("code") Long code,@RequestBody Compagnie request) {

        // Vérifier si la compagnie existe
        Compagnie existingCompany = compagnieService.getCompagnyCode(code);
        if (existingCompany == null) {
            return ResponseEntity.notFound().build();
        }

        // Mettre à jour les informations de la compagnie
        compagnieService.updateCompagnie(
                code,
                request.getNom(),
                request.getAdresse(),
                request.getTel(),
                request.getLogo());

        return ResponseEntity.ok("Compagnie mise à jour avec succès.");
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<?> deleteCompagny(@PathVariable Long code){
        try {
            compagnieService.deleteCompagnie(code);
            return ResponseEntity.noContent().build();
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/nom")
    public Compagnie GetCompanyName(String nom){
        return compagnieService.getCompagnyName(nom);
    }
    @GetMapping("/admin/{id}/all")
    public List<Compagnie> GetAllCompagnies(){
        return compagnieService.getAllCompanies();
    }
}

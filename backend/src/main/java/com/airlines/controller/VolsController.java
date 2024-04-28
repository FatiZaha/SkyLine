package com.airlines.controller;


import com.airlines.model.Ville;
import com.airlines.model.Vol;
import com.airlines.service.VolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("/api/vols")
public class VolsController {

    @Autowired
    private VolService volService;

    @PostMapping("/add")
    public ResponseEntity<?> addVol(@RequestBody Vol vol, BindingResult bindingResult) {


        LocalDate dateDepart = vol.getDateDepart().toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
        LocalDate dateActuelle = LocalDate.now();
        if (dateDepart.isBefore(dateActuelle) || (vol.getDateArrive() == null) || (vol.getStatus() == null) || (vol.getPrix() <= 0)) {
            return ResponseEntity.badRequest().build();
        }

        volService.saveVol(vol);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{codeVol}")
    public ResponseEntity<String> updateVol(@PathVariable("codeVol") Long codeVol,@RequestBody Vol request) {

        // Vérifier si le vol existe
        Vol existingVol = volService.GetVolByCodeVol(codeVol);
        if (existingVol == null) {
            return ResponseEntity.notFound().build();
        }

        // Mettre à jour les informations du vol
        volService.updateVol(
                codeVol,
                request.getDateDepart(),
                request.getDateArrive(),
                request.getStatus(),
                request.getPrix());

        return ResponseEntity.ok("Vol mis à jour avec succès.");
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<?> deleteVol(@PathVariable Long codeVol){
        try {
            volService.DeleteVol(codeVol);
            return ResponseEntity.noContent().build();
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/villeDepart")
    public List<Vol> getVolByDepart(Ville ville){
        return volService.GetVolByDepart(ville);
    }
    @GetMapping("/villeArrivee")
    public List<Vol> getVolByDestination(Ville ville){
        return volService.GetVolByDestination(ville);
    }

    @GetMapping("/prix")
    public List<Vol> getVolByPrice(Float prix){
        return volService.GetVolByPrice(prix);
    }

    @GetMapping("/dateDepart")
    public List<Vol> getVolByDateArrive(Date date){
        return volService.GetVolByDateArrive(date);
    }

    @GetMapping("/dateArrivee")
    public List<Vol> getVolByDateDepart(Date date){
        return volService.GetVolByDateDepart(date);
    }

    @GetMapping("/company")
    public List<Vol> getVolByCompanyName(String nom){
        return volService.GetVolByCompanyName(nom);
    }
    @GetMapping("/allVols")
    public List<Vol> GetVols(String nom){
        return volService.GetAllVols();
    }




}

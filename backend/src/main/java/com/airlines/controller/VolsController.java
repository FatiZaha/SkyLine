package com.airlines.controller;

import com.airlines.model.Ville;
import com.airlines.model.Vol;
import com.airlines.service.VolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/vols")
public class VolsController {
    private VolService volService;
/*
    private boolean valider(Vol p) {

        LocalDate dateDepart = p.getDateDepart().toLocalDate();
        LocalDate dateActuelle = LocalDate.now();

        if (dateDepart.isBefore(dateActuelle)) {
            return false; // La date de départ est une date passée
        }
        if (p.getDateArrive() == null) {
            return false; // La date d'arrivée est obligatoire
        }
        if (p.getStatus() == null) {
            return false; // Le statut du vol est obligatoire
        }
        if (p.getPrix() <= 0) {
            return false; // Le prix du vol doit être supérieur à zéro
        }
        return true; // Toutes les validations sont passées avec succès
    }

    @Autowired
    private VolService volService;

    @PostMapping("/vols")
    public ResponseEntity<Void> ajouterVol(@RequestBody Vol vol) {
        if (!valider(vol)) {
            return ResponseEntity.badRequest().build();
        }

        Vol volAjoute = volService.SaveVol(vol);

        if (volAjoute != null) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
*/
    @DeleteMapping("/{id}")
    public  ResponseEntity<Void> deleteVol(@PathVariable Long codeVol){
        volService.DeleteVol(codeVol);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping
    public List<Vol> getVolByDepart(Ville ville){
        return volService.GetVolByDepart(ville);
    }

    @GetMapping
    public List<Vol> getVolByDestination(Ville ville){
        return volService.GetVolByDestination(ville);
    }

    @GetMapping
    public List<Vol> getVolByPrice(Float prix){
        return volService.GetVolByPrice(prix);
    }

    @GetMapping
    public List<Vol> getVolByDateArrive(Date date){
        return volService.GetVolByDateArrive(date);
    }

    @GetMapping
    public List<Vol> getVolByDateDepart(Date date){
        return volService.GetVolByDateDepart(date);
    }

    @GetMapping
    public List<Vol> getVolByCompanyName(String nom){
        return volService.GetVolByCompanyName(nom);
    }


    @PutMapping("/vols/{codeVol}")
    public ResponseEntity<Void> updateVol(@PathVariable Long codeVol, @RequestBody  Vol vol){
        volService.UpdateVol(codeVol,vol);
        return ResponseEntity.ok().build();
    }
}

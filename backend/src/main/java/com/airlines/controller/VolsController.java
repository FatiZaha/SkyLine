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
@RequestMapping("/api/")
public class VolsController {

    @Autowired
    private VolService volService;

    @PostMapping("/admin/{id}/vols/add")
    public ResponseEntity<?> addVol(@RequestBody Vol vol, BindingResult bindingResult) {


        LocalDate dateDepart = vol.getDateDepart().toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
        LocalDate dateActuelle = LocalDate.now();
        if (dateDepart.isBefore(dateActuelle) || (vol.getDateArrive() == null) || (vol.getStatus() == null) || (vol.getPrixClass1() <= 0) || (vol.getPrixClass2() <= 0)) {
            return ResponseEntity.badRequest().build();
        }

        volService.saveVol(vol);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/admin/{id}/vols/{codeVol}")
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
                request.getPrixClass1(),
                request.getPrixClass2()
        );



        return ResponseEntity.ok("Vol mis à jour avec succès.");
    }

    @DeleteMapping("/admin/{id}/vols/{codeVol}")
    public  ResponseEntity<?> deleteVol(@PathVariable Long codeVol){
        try {
            volService.DeleteVol(codeVol);
            return ResponseEntity.noContent().build();
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("clients/{id}/vols/{villeDepart}")
    public List<Vol> getVolByDepart(@PathVariable Ville villeDepart){
        return volService.GetVolByDepart(villeDepart);
    }
    @GetMapping("clients/{id}/vols/{villeArrivee}")
    public List<Vol> getVolByDestination(@PathVariable Ville villeArrivee){
        return volService.GetVolByDestination(villeArrivee);
    }

    @GetMapping("clients/{id}/vols/{prixClass2}")
    public List<Vol> getVolByPrice(@PathVariable float prixClass2){
        return volService.GetVolByPrice(prixClass2);
    }

    @GetMapping("clients/{id}/vols/{dateArrive}")
    public List<Vol> getVolByDateArrive(@PathVariable Date dateArrive){
        return volService.GetVolByDateArrive(dateArrive);
    }

    @GetMapping("clients/{id}/vols/{dateDepart}")
    public List<Vol> getVolByDateDepart(@PathVariable Date dateDepart){
        return volService.GetVolByDateDepart(dateDepart);
    }

    @GetMapping("clients/{id}/vols/{companyNom}")
    public List<Vol> getVolByCompanyName(@PathVariable String companyNom){
        return volService.GetVolByCompanyName(companyNom);
    }
    @GetMapping("clients/{id}/vols/allVols")
    public List<Vol> GetVols_Admin(){
        return volService.GetAllVols();
    }

    @GetMapping("admin/{id}/vols/{idv}")
    public Vol GetVolsById_Admin(@PathVariable Long idv){
        return volService.GetVolByCodeVol(idv);
    }

    @GetMapping("admin/{id}/vols/allVols")
    public List<Vol> GetVols_Client(){
        return volService.GetAllVols();
    }

    @GetMapping("clients/{id}/vols/{idv}")
    public Vol GetVolsById_Client(@PathVariable Long idv){
        return volService.GetVolByCodeVol(idv);
    }




}

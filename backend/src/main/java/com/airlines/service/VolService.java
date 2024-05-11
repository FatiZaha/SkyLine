package com.airlines.service;


import com.airlines.model.Status;
import com.airlines.model.Ville;
import com.airlines.model.Vol;
import com.airlines.repository.VolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Date;

@Service
@Transactional
public class VolService  {

    @Autowired
    private VolRepository volRepository;

    public void saveVol(Vol vol) {
        volRepository.save(vol);
    }

    public void updateVol(Long codeVol, Date dateDepart, Date dateArrivee, Status status, float prixClass1, float prixClass2) {
        Vol vol = volRepository.findById(codeVol).orElse(null);
        if (vol != null) {
            vol.setDateDepart(dateDepart);
            vol.setDateArrive(dateArrivee);
            vol.setStatus(status);
            vol.setPrixClass1(prixClass1);
            vol.setPrixClass2(prixClass2);
            volRepository.save(vol);
        }

    }

    public void DeleteVol(Long codeVol){
        volRepository.deleteVolByCodeVol(codeVol);
    }

    public List<Vol> GetVolByDepart(Ville ville){
        return volRepository.findVolsByAeroportDepartVille(ville);
    }

    public List<Vol> GetVolByDestination(Ville ville){
        return volRepository.findVolsByAeroportDestinationVille(ville);
    }

    public List<Vol> GetVolByPrice(Float prixClass2){
        return volRepository.findVolsByPrixClass2(prixClass2);
    }

    public List<Vol> GetVolByDateArrive(Date date){
        return volRepository.findVolsByDateArrive(date);
    }

    public List<Vol> GetVolByDateDepart(Date date){
        return volRepository.findVolsByDateDepart(date);
    }

    public List<Vol> GetVolByCompanyName(String nom){
        return volRepository.findVolsByAvionVolCompagnieNom(nom);
    }

    public List<Vol> GetAllVols(){
        return volRepository.findAll();
    }

    public Vol GetVolByCodeVol(Long codeVol){
        return volRepository.findVolByCodeVol(codeVol).get();
    }
}


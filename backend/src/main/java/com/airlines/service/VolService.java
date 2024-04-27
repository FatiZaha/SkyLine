package com.airlines.service;


import com.airlines.model.Ville;
import com.airlines.model.Vol;
import com.airlines.repository.VolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class VolService  {

    @Autowired
    private VolRepository volRepository;

    public Vol SaveVol(Vol vol) {
        return volRepository.saveVol(vol);
    }

    public void DeleteVol(Long codeVol){
        volRepository.deleteVolByCodeVol(codeVol);
    }

    public void UpdateVol(Long codeVol,Vol vol) {
        volRepository.updateVolByCodeVol(codeVol,vol);
    }

    public List<Vol> GetVolByDepart(Ville ville){
        return volRepository.findVolsByAeroportDepartVille(ville);
    }

    public List<Vol> GetVolByDestination(Ville ville){
        return volRepository.findVolsByAeroportDestinationVille(ville);
    }

    public List<Vol> GetVolByPrice(Float prix){
        return volRepository.findVolsByPrix(prix);
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

}


package com.airlines.service;

import com.airlines.model.Compagnie;
import com.airlines.repository.CompagnieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CompagnieService{

    @Autowired
    private CompagnieRepository compagnieRepository;

    public void saveCompagnie(Compagnie compagnie) {
        compagnieRepository.save(compagnie);
    }

    public void updateCompagnie(Long code, String nom, String adresse, String tel, String logo) {
        Compagnie compagnie = compagnieRepository.findCompByCode(code);
        if (compagnie != null) {
            compagnie.setNom(nom);
            compagnie.setAdresse(adresse);
            compagnie.setTel(tel);
            compagnie.setLogo(logo);
            compagnieRepository.save(compagnie);
        }

    }

    public void deleteCompagnie(Long code){
        compagnieRepository.deleteCompagnieByCode(code);
    }

    public Compagnie getCompagnyName(String nom){
        return compagnieRepository.findCompanieByNom(nom);
    }
    public Compagnie getCompagnyCode(Long code){
        return compagnieRepository.findCompanieByCode(code);
    }
    public List<Compagnie> getAllCompanies(){
        return compagnieRepository.findAll();
    }
}

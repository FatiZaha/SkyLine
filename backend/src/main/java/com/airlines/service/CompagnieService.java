package com.airlines.service;

import com.airlines.model.Compagnie;
import com.airlines.repository.CompagnieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class CompagnieService{

    @Autowired
    private CompagnieRepository compagnieRepository;

    public void saveCompagnie(Compagnie compagnie) {
        compagnieRepository.save(compagnie);
    }

    public void updateCompagnie(Long code, String nom, String adresse, String tel, String logo) {
        compagnieRepository.updateCompagnieByCode(code,nom,adresse,tel,logo);

    }

    public void deleteCompagnie(Long code){
        compagnieRepository.deleteByCode(code);
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

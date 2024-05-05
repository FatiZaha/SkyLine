package com.airlines.service;

import com.airlines.model.Ville;
import com.airlines.repository.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VilleService {

    @Autowired
    private VilleRepository villeRepository;
    public List<Ville> geAllVilles(){
        return villeRepository.findAll();
    }
}

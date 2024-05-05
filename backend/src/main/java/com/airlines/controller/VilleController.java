package com.airlines.controller;

import com.airlines.model.Ville;
import com.airlines.service.VilleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class VilleController {
    @Autowired
    private VilleService villeService;
    @GetMapping("/ville/allVilles")
    public List<Ville> getAllVilles(){
        return villeService.geAllVilles();
    }
}

package com.airlines.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Aeroport {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Ville ville;



    public Aeroport(String nom, Ville ville) {
        this.nom = nom;
        this.ville = ville;

    }

}

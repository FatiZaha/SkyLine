package com.airlines.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Aeroport {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String nom;

    @ManyToOne
    private Ville ville;
}

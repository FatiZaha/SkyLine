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
    @Setter
    @Getter
    private Long id;

    @Setter
    @Getter
    private String nom;

    @ManyToOne
    private Ville ville;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "aeroports")
    private List<Vol> vols = new ArrayList<>();

    public Aeroport(String nom, Ville ville, List<Vol> vols) {
        this.nom = nom;
        this.ville = ville;
        this.vols = vols;
    }

}

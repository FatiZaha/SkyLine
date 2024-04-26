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
    @Column(nullable = false)
    private Ville ville;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "aeroportDepart")
    private List<Vol> departVols = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "aeroportDestination")
    private List<Vol> destinationVols = new ArrayList<>();

    public Aeroport(String nom, Ville ville, List<Vol> departVols, List<Vol> destinationVols) {
        this.nom = nom;
        this.ville = ville;
        this.departVols = departVols;
        this.destinationVols = destinationVols;
    }

}

package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.engine.internal.Cascade;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Compagnie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long code;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String adresse;

    @Column(nullable = false)
    private String tel;

    //@Column(length=1000)
    private String logo;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="compagnie")
    private List<Avion> avions = new ArrayList<>();

    @ManyToOne
    private Admin admin;


    public Compagnie(String nom, String adresse, String tel, String logo) {
        this.nom = nom;
        this.adresse = adresse;
        this.tel = tel;
        this.logo = logo;
    }
}

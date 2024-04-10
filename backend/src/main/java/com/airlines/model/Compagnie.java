package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.engine.internal.Cascade;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Compagnie {

    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private long code;

    private String Nom;
    private String Adresse;
    private String Tel;
    //@Column(length=1000)
    private String Logo;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="compagnie")
    private List<Avion> avions = new ArrayList<>();

    @ManyToOne
    private Admin admin;

}

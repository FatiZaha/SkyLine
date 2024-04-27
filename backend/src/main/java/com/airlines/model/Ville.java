package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ville {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nom;

    private String image;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="")
    private List<Aeroport> aeroports = new ArrayList<>();


}

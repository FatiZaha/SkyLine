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
    @Setter
    @Getter
    private long id;

    @Setter
    @Getter
    private String nom;

    @Setter
    @Getter
    private String image;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="")
    private List<Aeroport> aeroports = new ArrayList<>();
}

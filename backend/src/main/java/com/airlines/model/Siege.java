package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Siege {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int capacite;

    private Type type;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="siege")
    private List<Place> places=new ArrayList<>();

    @ManyToOne
    private Avion avion;
}

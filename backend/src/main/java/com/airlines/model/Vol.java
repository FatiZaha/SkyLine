package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)


    private Long code_vol;
    private Date date_depart;
    private Date date_arrive;
    private String status;
    private String duree;
    private float prix;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "vl")
    private List<Reservation> reservations = new ArrayList<>();

    @ManyToOne
    private Aeroport aeroports;

}

package com.airlines.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToOne;
import lombok.*;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long num_res;

    private  String ville_dep;

    private String Ville_arriv;

    private Date date_res;

    private float prix_total;


    @ManyToOne
    private Client client;

    @ManyToOne
    private Vol vol;
}

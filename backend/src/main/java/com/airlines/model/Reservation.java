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
    @Setter
    @Getter
    private Long num_res;

    @Setter
    @Getter
    private  String ville_dep;

    @Setter
    @Getter
    private String Ville_arriv;

    @Setter
    @Getter
    private Date date_res;

    @Setter
    @Getter
    private float prix_total;


    @ManyToOne
    private Client client;

    @ManyToOne
    private Vol vol;
}

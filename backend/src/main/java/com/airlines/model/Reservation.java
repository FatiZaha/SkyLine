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
    private Long numRes;

    private  String villeDep;

    private String villeArriv;

    private Date dateRes;

    private float prixTotal;

    @ManyToOne
    private Place place;

    private EtatPaiement confirmerResevation;


    @ManyToOne
    private Client client;

    @ManyToOne
    private Vol vol;

    public Reservation(String ville_dep, String ville_arriv, Date date_res, float prix_total, Client client, Vol vol,Place place) {
        this.villeDep = ville_dep;
        villeArriv = ville_arriv;
        this.dateRes = date_res;
        this.prixTotal = prix_total;
        this.client = client;
        this.vol = vol;
        this.place=place;
        this.confirmerResevation=EtatPaiement.NOT_PAID;
    }
}

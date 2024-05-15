package com.example.skylineapp.model;
import com.google.gson.annotations.SerializedName;

import java.util.Date;

public class Reservation {

    @SerializedName("numRes")
    private Long numRes;

    @SerializedName("dateRes")
    private Date dateRes;

    @SerializedName("prixTotal")
    private float prixTotal;

    @SerializedName("place")
    private Place place;

    @SerializedName("confirmerResevation")
    private EtatPaiement confirmerResevation;


    @SerializedName("client")
    private Client client;

    @SerializedName("vol")
    private Vol vol;

    public Reservation(Date date_res, float prix_total, Client client, Vol vol,Place place) {

        this.dateRes = date_res;
        this.prixTotal = prix_total;
        this.client = client;
        this.vol = vol;
        this.place=place;
        this.confirmerResevation=EtatPaiement.NOT_PAID;
    }

}

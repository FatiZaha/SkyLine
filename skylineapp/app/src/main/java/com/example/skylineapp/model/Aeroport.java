package com.example.skylineapp.model;

import com.google.gson.annotations.SerializedName;

public class Aeroport {


    @SerializedName("id")
    private Long id;

    @SerializedName("nom")
    private String nom;

    @SerializedName("ville")
    private Ville ville;



    public Aeroport(String nom, Ville ville) {
        this.nom = nom;
        this.ville = ville;

    }

}

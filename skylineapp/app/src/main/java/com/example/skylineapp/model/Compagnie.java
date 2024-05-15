package com.example.skylineapp.model;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

public class Compagnie {

    @SerializedName("code")
    private long code;

    @SerializedName("nom")
    private String nom;

    @SerializedName("adresse")
    private String adresse;

    @SerializedName("tel")
    private String tel;

    @SerializedName("logo")
    private String logo;

    @SerializedName("avions")
    private List<Avion> avions = new ArrayList<>();

    @SerializedName("id")
    private Admin admin;


    public Compagnie(String nom, String adresse, String tel, String logo) {
        this.nom = nom;
        this.adresse = adresse;
        this.tel = tel;
        this.logo = logo;
    }
}

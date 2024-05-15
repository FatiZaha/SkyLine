package com.example.skylineapp.model;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

public class Ville {

    @SerializedName("id")
    private long id;

    @SerializedName("nom")
    private String nom;

    @SerializedName("image")
    private String image;

    @SerializedName("aeroports")
    private List<Aeroport> aeroports = new ArrayList<>();


}

package com.example.skylineapp.model;
import com.google.gson.annotations.SerializedName;
public class Siege {

    @SerializedName("id")
    private long id;

    @SerializedName("capacite")
    private int capacite;

    @SerializedName("type")
    private Type type;



    @SerializedName("avion")
    private Avion avion;
}

package com.example.skylineapp.model;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Vol {

    @SerializedName("codeVol")
    private Long codeVol;

    @SerializedName("dateDepart")
    private Date dateDepart;

    @SerializedName("dateArrive")
    private Date dateArrive;

    @SerializedName("status")
    private Status status;

    @SerializedName("duree")
    private String duree;

    @SerializedName("prixClass1")
    private float prixClass1;

    @SerializedName("prixClass2")
    private float prixClass2;

    @SerializedName("reservations")
    private List<Reservation> reservations = new ArrayList<>();

    @SerializedName("aeroportDepart")
    private Aeroport aeroportDepart;

    @SerializedName("aeroportDestination")
    private Aeroport aeroportDestination;

    @SerializedName("avionVol")
    private Avion avionVol;

}

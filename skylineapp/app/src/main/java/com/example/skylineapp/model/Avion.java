package com.example.skylineapp.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

public class Avion{


    @SerializedName("numero")
    private long numero;


    @SerializedName("Modele")
    private String Modele;

    @SerializedName("sieges")
    private List<Siege> sieges=new ArrayList<>();


    @SerializedName("compagnie")
    private Compagnie compagnie;

}
/*Avec les attributs `cascade=CascadeType.ALL` et `orphanRemoval=true`, toutes les opérations de cascade, telles que la persistance,
la mise à jour et la suppression, seront appliquées aux enfants lorsqu'une opération correspondante est effectuée sur le parent.
De plus, si un enfant devient orphelin (n'est plus référencé par le parent),
il sera automatiquement supprimé de la base de données.*/
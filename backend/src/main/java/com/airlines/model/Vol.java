package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codeVol;

    private Date dateDepart;


    private Date dateArrive;


    private Status status;

    @Transient
    private String duree;


    private float prixClass1;
    private float prixClass2;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "vol")
    private List<Reservation> reservations = new ArrayList<Reservation>();

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "aeroport_depart_id")
    private Aeroport aeroportDepart;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "aeroport_destination_id")
    private Aeroport aeroportDestination;

    @ManyToOne
    private Avion avionVol;

}

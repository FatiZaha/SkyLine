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
    @Setter
    @Getter
    private Long code_vol;

    @Setter
    @Getter
    private Date date_depart;

    @Setter
    @Getter
    private Date date_arrive;

    @Setter
    @Getter
    private String status;

    @Setter
    @Getter
    private String duree;

    @Setter
    @Getter
    private float prix;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "vl")
    private List<Reservation> reservations = new ArrayList<>();

    @ManyToOne
    private Aeroport aeroports;

}

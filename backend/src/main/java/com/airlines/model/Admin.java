package com.airlines.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Admin {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String login;

    private String password;

    @OneToMany(cascade= CascadeType.ALL,mappedBy="")
    private List<Compagnie> companies = new ArrayList<>();



}

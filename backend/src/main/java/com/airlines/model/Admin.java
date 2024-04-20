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
    @Setter
    @Getter
    private long id;

    @Setter
    @Getter
    private String login;

    @Setter
    @Getter
    private String password;

    @OneToMany(cascade= CascadeType.ALL,mappedBy="")
    private List<Compagnie> companies = new ArrayList<>();



}

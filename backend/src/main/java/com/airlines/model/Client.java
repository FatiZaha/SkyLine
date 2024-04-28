package com.airlines.model;
import com.airlines.dto.AirlinesDto;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(unique = true, nullable = false)
    private String email;


    private String tel;

    @Column(nullable = false)
    private String password;

@JsonIgnore
@OneToMany(cascade = CascadeType.ALL, mappedBy = "client")
private List<Reservation> reservations = new ArrayList<>();

    public Client(String nom, String prenom, String email, String tel, String password) {

        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.password = password;
    }

    @ElementCollection
    private List<AirlinesDto> fav=new ArrayList();
}

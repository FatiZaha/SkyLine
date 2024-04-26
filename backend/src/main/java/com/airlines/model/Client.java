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
@OneToMany(cascade = CascadeType.ALL, mappedBy = "cl")
private List<Reservation> reservations = new ArrayList<>();


@ElementCollection
    private List<AirlinesDto> fav=new ArrayList();
}

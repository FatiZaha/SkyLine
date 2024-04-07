package com.airlines.model;
import com.airlines.dto.AirlinesDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

private Long id;
private String nom;
private String prenom;
private String email;
private String tel;
private String login;
private String password;

@JsonIgnore
@OneToMany
private List<Reservation> reservations = new ArrayList<>();


@ElementCollection
    private List<AirlinesDto> fav=new ArrayList();
}

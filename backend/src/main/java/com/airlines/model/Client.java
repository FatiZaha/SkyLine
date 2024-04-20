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
    @Setter
    @Getter
    private Long id;

    @Setter
    @Getter
    private String nom;

    @Setter
    @Getter
    private String prenom;

    @Setter
    @Getter
    private String email;

    @Setter
    @Getter
    private String tel;

    @Setter
    @Getter
    private String login;

    @Setter
    @Getter
    private String password;

@JsonIgnore
@OneToMany(cascade = CascadeType.ALL, mappedBy = "cl")
private List<Reservation> reservations = new ArrayList<>();


@ElementCollection
    private List<AirlinesDto> fav=new ArrayList();
}

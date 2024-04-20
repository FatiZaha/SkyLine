package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Siege {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    @Getter
    private long id;

    @Setter
    @Getter
    private int capacite;

    @Setter
    @Getter
    private Type type;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="siege")
    private List<Place> places=new ArrayList<>();

    @ManyToOne
    private Avion avion;
}

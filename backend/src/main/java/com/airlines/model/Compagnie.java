package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.engine.internal.Cascade;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Compagnie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    @Getter
    private long code;

    @Setter
    @Getter
    private String Nom;

    @Setter
    @Getter
    private String Adresse;

    @Setter
    @Getter
    private String Tel;

    @Setter
    @Getter
    //@Column(length=1000)
    private String Logo;

    @JsonIgnore
    @OneToMany(cascade= CascadeType.ALL,mappedBy="compagnie")
    private List<Avion> avions = new ArrayList<>();

    @ManyToOne
    private Admin admin;

}

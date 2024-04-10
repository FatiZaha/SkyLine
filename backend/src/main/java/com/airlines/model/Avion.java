package com.airlines.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@Entity //Marquer que la classe comme une entite persistante ( fournit par JPA)
@Data // annotation fournie par le projet Lombok, qui génère automatiquement les méthodes `toString()`, `equals()`, `hashCode()`, ainsi que les accesseurs et les mutateurs (getters et setters) pour tous les champs de la classe.
@AllArgsConstructor //annotation de Lombok qui génère automatiquement un constructeur prenant en compte tous les champs de la classe.
@NoArgsConstructor //annotation de Lombok qui génère automatiquement un constructeur sans argument.
public class Avion{


    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long numero;

    private String Modele;

    @JsonIgnore //Ignorer un champ lors de la serialisation et la deserialisation des objets JSON
    @OneToMany(cascade= CascadeType.ALL,mappedBy="avion")
    private List<Siege> sieges=new ArrayList<>();

    @ManyToOne
    private Compagnie compagnie;

}
/*Avec les attributs `cascade=CascadeType.ALL` et `orphanRemoval=true`, toutes les opérations de cascade, telles que la persistance,
la mise à jour et la suppression, seront appliquées aux enfants lorsqu'une opération correspondante est effectuée sur le parent.
De plus, si un enfant devient orphelin (n'est plus référencé par le parent),
il sera automatiquement supprimé de la base de données.*/
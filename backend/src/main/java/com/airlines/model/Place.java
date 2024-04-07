package com.airlines.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Place {

    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long numplace;

    @ManyToOne
    private Siege siege;
}

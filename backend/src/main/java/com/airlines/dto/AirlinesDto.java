package com.airlines.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

//Data Transfer Object
@Data
@Embeddable
public class AirlinesDto {

    private  String title;

    @Column(length = 10000)

    private String description;
    private Long id;
}

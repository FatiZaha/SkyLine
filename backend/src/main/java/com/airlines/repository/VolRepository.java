package com.airlines.repository;

import com.airlines.model.Vol;
import com.airlines.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface VolRepository extends JpaRepository<Vol, Long> {
    List<Vol> findVolsByAeroportDepartVille(Ville ville);

    List<Vol> findVolsByAeroportDestinationVille(Ville ville);

    List<Vol>findVolsByPrix(Float prix);

    List<Vol>findVolsByDateArrive(Date date);
    List<Vol>findVolsByDateDepart(Date date);
    List<Vol>findVolsByAvionVolCompagnieNom(String nom);

}

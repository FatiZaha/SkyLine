package com.airlines.repository;

import com.airlines.model.Vol;
import com.airlines.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VolRepository extends JpaRepository<Vol, Long> {
    List<Vol> findVolByAeroportDepartVille(Ville ville);

    List<Vol> findVolByAeroportDestinationVille(Ville ville);

    List<Vol>findVolByPrix(Float prix);

}

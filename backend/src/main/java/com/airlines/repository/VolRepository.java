package com.airlines.repository;

import com.airlines.model.Vol;
import com.airlines.model.Ville;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface VolRepository extends JpaRepository<Vol, Long> {

    Vol saveVol(Vol vol);

    Vol deleteVolByCodeVol(Long codeVol);

    Vol updateVolByCodeVol(Long codeVol, Vol vol);

    List<Vol> findVolsByAeroportDepartVille(Ville ville);

    List<Vol> findVolsByAeroportDestinationVille(Ville ville);

    List<Vol>findVolsByPrix(Float prix);

    List<Vol>findVolsByDateArrive(Date date);

    List<Vol>findVolsByDateDepart(Date date);

    List<Vol>findVolsByAvionVolCompagnieNom(String nom);

}

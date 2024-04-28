package com.airlines.repository;

import com.airlines.model.Aeroport;
import com.airlines.model.Vol;
import com.airlines.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface VolRepository extends JpaRepository<Vol, Long> {

    @Modifying
    @Query("UPDATE Vol SET dateDepart = :dateDepart, dateArrive = :dateArrive, status = :status, prix = :prix WHERE codeVol = :codeVol")
    void updateVolByCodeVol(
            @Param("codeVol") Long codeVol,
            @Param("dateDepart") Date dateDepart,
            @Param("dateArrive") Date dateArrive,
            @Param("status") String status,
            @Param("prix") float prix
    );
    void deleteVolByCodeVol(Long codeVol);

    List<Vol> findVolsByAeroportDepartVille(Ville ville);

    List<Vol> findVolsByAeroportDestinationVille(Ville ville);

    List<Vol>findVolsByPrix(Float prix);

    List<Vol>findVolsByDateArrive(Date date);

    List<Vol>findVolsByDateDepart(Date date);

    List<Vol>findVolsByAvionVolCompagnieNom(String nom);

    List<Vol>findAll();

    Vol findByCodeVol(Long codeVol);



}

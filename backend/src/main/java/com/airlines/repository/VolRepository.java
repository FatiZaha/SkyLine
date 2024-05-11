package com.airlines.repository;

import com.airlines.model.Aeroport;
import com.airlines.model.Status;
import com.airlines.model.Vol;
import com.airlines.model.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface VolRepository extends JpaRepository<Vol, Long> {

    @Modifying
    @Query("UPDATE Vol SET dateDepart = :dateDepart, dateArrive = :dateArrive, status = :status,prixClass1 =:prixClass1, prixClass2 =:prixClass2 WHERE codeVol = :codeVol")
    void updateVolByCodeVol(
            @Param("codeVol") Long codeVol,
            @Param("dateDepart") Date dateDepart,
            @Param("dateArrive") Date dateArrive,
            @Param("status") Status status,
            @Param("prixClass1") float prixClass1,
            @Param("prixClass2") float prixClass2
    );
    @Modifying
    @Query("UPDATE Vol SET status = :status WHERE codeVol = :codeVol")
    void updateVolByCodeVol(
            @Param("codeVol") Long codeVol,
            @Param("status") Status status

    );
    public void deleteVolByCodeVol(Long codeVol);

    public List<Vol> findVolsByAeroportDepartVille(Ville ville);

    public List<Vol> findVolsByAeroportDestinationVille(Ville ville);

    public List<Vol>findVolsByPrixClass2(Float prix);

    public List<Vol>findVolsByDateArrive(Date date);

    public List<Vol>findVolsByDateDepart(Date date);

    public List<Vol>findVolsByAvionVolCompagnieNom(String nom);


    public List<Vol> findAllByStatus(Status status);



    public Optional<Vol> findVolByCodeVol(Long codeVol);



}

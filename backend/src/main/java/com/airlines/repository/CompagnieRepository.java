package com.airlines.repository;

import com.airlines.model.Compagnie;

import com.airlines.model.Ville;
import com.airlines.model.Vol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CompagnieRepository extends JpaRepository<Compagnie, Long>  {

    @Modifying
    @Query("UPDATE Compagnie SET nom = :nom, adresse = :adresse, tel = :tel, logo = :logo WHERE code = :code")
    void updateVolByCodeVol(
            @Param("code") Long code,
            @Param("nom") String nom,
            @Param("adresse") String adresse,
            @Param("tel") String tel,
            @Param("logo") float logo
    );
    public void deleteCompagnieByCode(Long code);

    public void deleteByCode(Long code);
    public Compagnie findCompanieByNom(String nom);

    public List<Compagnie>findAll();

    public Compagnie findCompByCode(Long code);


    public Compagnie findCompanieByCode(Long code);
}

package com.airlines.repository;

import com.airlines.model.Compagnie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompagnieRepository extends JpaRepository<Compagnie, Long>  {

    List<Compagnie>findCompagniesByNom(String nom);
}
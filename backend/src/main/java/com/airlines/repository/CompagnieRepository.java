package com.airlines.repository;

import com.airlines.model.Compagnie;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CompagnieRepository extends JpaRepository<Compagnie, Long>  {

    List<Compagnie>findCompagniesByNom(String nom);
}
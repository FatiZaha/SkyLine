package com.airlines.repository;

import com.airlines.model.Compagnie;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CompagnieRepository extends JpaRepository<Compagnie, Long>  {

}
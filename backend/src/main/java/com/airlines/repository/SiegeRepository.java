package com.airlines.repository;

import com.airlines.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SiegeRepository extends JpaRepository<Siege, Long> {


    public Siege findByType(Type type);

    public List<Siege> findSiegesByAvion(Avion avion);
}

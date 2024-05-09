package com.airlines.repository;

import com.airlines.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SiegeRepository extends JpaRepository<Siege, Long> {


    public Siege findSiegeByTypeAndAvionNumero(Type type,Long avionId);

    public List<Siege> findSiegesByAvion(Avion avion);

}

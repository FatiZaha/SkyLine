package com.airlines.repository;

import com.airlines.model.Avion;
import com.airlines.model.Compagnie;
import com.airlines.model.Place;
import com.airlines.model.Siege;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
    public Place findByNumplace(Long numPlace);
    public List<Place> findPlacesBySiege(Siege siege);
    public List<Place> findPlacesBySiegeAvion(Avion avion);

}

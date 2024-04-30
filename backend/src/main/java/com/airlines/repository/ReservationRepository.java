package com.airlines.repository;


import com.airlines.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {



    public List<Reservation> findReservationsByClient_Id(Long id);
    public Optional<Reservation> findByNumResAndClient_Id(Long idR,Long id);
    public Optional<Reservation> findByNumRes(Long id);
    public List<Reservation> findReservationsByVolAndPlaceSiegeType(Vol vol, Type type);
    public List<Reservation> findReservationsByVol(Vol vol);

    @Modifying
    @Query("UPDATE Reservation r SET r.confirmerResevation = :etatPaiement WHERE r.numRes = :numRes")
    public Reservation updateReservationByNumRes(@Param("etatPaiement") EtatPaiement etatPaiement, @Param("numRes") Long numRes);

    public Reservation deleteReservationByNumRes(Long numRes);
}


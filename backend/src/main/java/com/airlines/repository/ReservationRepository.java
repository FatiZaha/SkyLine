package com.airlines.repository;


import com.airlines.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {

    List<Reservation> findReservationsByClient_Id(Long id);
}

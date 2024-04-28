package com.airlines.service;


import com.airlines.model.Reservation;
import com.airlines.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAllReservations(){
        return reservationRepository.findAll();
    }
    public Optional<Reservation> getReservationById(Long id){
        return reservationRepository.findByNumRes(id);
    }

    public Optional<Reservation> getReservationByIdClient(Long idc,Long idr){
        return reservationRepository.findByNumResAndClient_Id(idr,idc);
    }
    public List<Reservation> getAllReservationsByClientId(Long id){
        return reservationRepository.findReservationsByClient_Id(id);
    }

}

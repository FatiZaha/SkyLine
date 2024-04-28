package com.airlines.controller;

import com.airlines.model.Reservation;
import com.airlines.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/")
public class ReservationsController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping("/admin/{id}/reservations")
    public List<Reservation> allReservation(){
        return reservationService.getAllReservations();
    }

    @GetMapping("clients/{id}/reservations/{idR}")
    public Optional<Reservation> oneReservationClient(@PathVariable Long id,@PathVariable Long idR){
        return reservationService.getReservationByIdClient(idR,id);
    }

    @GetMapping("admin/{id}/reservations/{idR}")
    public Optional<Reservation> oneReservationAdmin(@PathVariable Long idR){
        return reservationService.getReservationById(idR);
    }

    @GetMapping("clients/{id}/reservations")
    public List<Reservation> allClientReservation(@PathVariable Long id){
        return reservationService.getAllReservationsByClientId(id);
    }

}

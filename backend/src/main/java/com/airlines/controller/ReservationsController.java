package com.airlines.controller;

import com.airlines.model.Compagnie;
import com.airlines.model.Reservation;
import com.airlines.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
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
        return reservationService.getReservationByIdAndClientId(idR,id);
    }

    @GetMapping("admin/{id}/reservations/{idR}")
    public Optional<Reservation> oneReservationAdmin(@PathVariable Long idR){
        return reservationService.getReservationById(idR);
    }

    @GetMapping("clients/{id}/reservations")
    public List<Reservation> allClientReservation(@PathVariable Long id){
        return reservationService.getAllReservationsByClientId(id);
    }


    @PostMapping("clients/{idc}/vols/{codeVol}/newReservation")
    public Object bookingFlight(@RequestParam("classType")String classType,
                                @PathVariable Long idc,
                                @PathVariable Long codeVol) {


        LocalDateTime date=LocalDateTime.now();
        Instant instant = date.atZone(ZoneId.systemDefault()).toInstant();

        // Convertir Instant en Date
        Date dateRes = Date.from(instant);

        return  reservationService.bookingFlight(dateRes,classType,idc,codeVol);


    }

    @DeleteMapping("clients/{idc}/reservations/{idR}")
    public Reservation cancelReservation(@PathVariable Long idR){
        return  reservationService.deleteReservationById(idR);
    }

    @PutMapping("clients/{idc}/reservations/{idR}")
    public Reservation confirmReservation(@PathVariable Long idR){
        return  reservationService.confirmReservationById(idR);
    }


}

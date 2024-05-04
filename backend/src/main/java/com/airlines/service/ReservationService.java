package com.airlines.service;


import com.airlines.model.*;
import com.airlines.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    private VolRepository volRepository;
    private PlaceRepository placeRepository;
    private SiegeRepository siegeRepository;
    private ClientRepository clientRepository;

    public List<Reservation> getAllReservations(){
        return reservationRepository.findAll();
    }
    public Optional<Reservation> getReservationById(Long id){
        return reservationRepository.findByNumRes(id);
    }

    public Optional<Reservation> getReservationByIdAndClientId(Long idc,Long idr){
        return reservationRepository.findByNumResAndClient_Id(idr,idc);
    }
    public List<Reservation> getAllReservationsByClientId(Long id){
        return reservationRepository.findReservationsByClient_Id(id);
    }

    public Reservation deleteReservationById(Long numRes){
        return reservationRepository.deleteReservationByNumRes(numRes);
    }

    public Reservation confirmReservationById(Long numRes){
        return reservationRepository.updateReservationByNumRes(EtatPaiement.PAID,numRes);
    }

    public Reservation bookingFlight(Date date_res, String classType, Long idClient, Long idVol){
        Vol vol= volRepository.findByCodeVol(idVol);
        Client client = clientRepository.getReferenceById(idClient);
        List<Reservation> reservations = reservationRepository.findReservationsByVolAndPlaceSiegeType(vol,Type.valueOf(classType));
        Siege siege = siegeRepository.findByType(Type.valueOf(classType));
        List<Place> places = placeRepository.findPlacesBySiege(siege);
        float prix_total = Type.valueOf(classType)==Type.Classe1?vol.getPrixClass1():vol.getPrixClass2();

        if(vol.getStatus()==Status.BOOKED)return null;
        if (reservations.isEmpty()){

            Reservation reservation = new Reservation(date_res, prix_total, client, vol, places.get(0));
            return reservationRepository.save(reservation);
        }
        else {
            List<Place> placesReserver = new ArrayList<>();

            for (Reservation reservation : reservations) {
                Place place = reservation.getPlace();
                placesReserver.add(place);
            }

            Optional<Place> optionalPlace = places.stream()
                    .filter(place -> !placesReserver.contains(place))
                    .findFirst();

            Place placeR = optionalPlace.orElse(null);
            if (placeR == null) return null;
            else {
                Reservation reservation = new Reservation(date_res, prix_total, client, vol, placeR);

                List<Reservation> allReservations = reservationRepository.findReservationsByVol(vol);
                List<Place> allPlaces=placeRepository.findPlacesBySiegeAvion(vol.getAvionVol());
                List<Place> allPlacesReserver = new ArrayList<Place>();

                for (Reservation r : allReservations) {
                    Place place = r.getPlace();
                    allPlacesReserver.add(place);
                }

                Optional<Place> optionalLastPlace = allPlaces.stream()
                        .filter(place -> !allPlacesReserver.contains(place))
                        .findFirst();

                Place lastPlace = optionalLastPlace.orElse(null);
                if (lastPlace == null) volRepository.updateVolByCodeVol(vol.getCodeVol(),Status.BOOKED);

                return reservationRepository.save(reservation);
            }



        }



    }

}

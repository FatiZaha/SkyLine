package com.airlines.timechecker;

import com.airlines.model.Avion;
import com.airlines.model.Status;
import com.airlines.model.Vol;
import com.airlines.repository.PlaceRepository;
import com.airlines.repository.ReservationRepository;
import com.airlines.repository.SiegeRepository;
import com.airlines.repository.VolRepository;

import java.util.Date;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class FlightStatusChecker {

    private static final ScheduledExecutorService executor = Executors.newSingleThreadScheduledExecutor();

    private static VolRepository volRepository;


    public static void startCheckingFlightStatus() {
        executor.scheduleAtFixedRate(() -> {



            volRepository.findAllByStatus(Status.AVAILABLE).forEach(vol -> {

                if (vol.getDateDepart().getTime()>= new Date().getTime()){
                    volRepository.updateVolByCodeVol(vol.getCodeVol(),Status.BOOKED);
                }
            });

        }, 0, 2, TimeUnit.SECONDS); // Vérification toutes les 2 secondes
    }

    public static void stopCheckingFlightStatus() {
        executor.shutdown();
    }
}
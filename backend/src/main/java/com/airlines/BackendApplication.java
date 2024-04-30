package com.airlines;

import com.airlines.timechecker.FlightStatusChecker;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {

        
        FlightStatusChecker.startCheckingFlightStatus();

        SpringApplication.run(BackendApplication.class, args);

    }

}

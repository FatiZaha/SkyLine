package com.example.skylineapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

public class FlightsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flights);

        CardView flightCard1 = findViewById(R.id.flight1);
        CardView flightCard2 = findViewById(R.id.flight2);
        CardView flightCard3 = findViewById(R.id.flight3);
        CardView flightCard4 = findViewById(R.id.flight4);
        CardView flightCard5 = findViewById(R.id.flight5);

        flightCard1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Gérer l'événement de clic pour le vol 1
                Intent intent = new Intent(FlightsActivity.this, ReservationActivity.class);
                intent.putExtra("flightName", "Flight from London to Marrakech");
                intent.putExtra("flightPrice", "$500");
                startActivity(intent);
            }
        });

        flightCard2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Gérer l'événement de clic pour le vol 2
                Intent intent = new Intent(FlightsActivity.this, ReservationActivity.class);
                intent.putExtra("flightName", "Flight from Paris to New York");
                intent.putExtra("flightPrice", "$800");
                startActivity(intent);
            }
        });

        flightCard3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Gérer l'événement de clic pour le vol 3
                Intent intent = new Intent(FlightsActivity.this, ReservationActivity.class);
                intent.putExtra("flightName", "Flight from Rome to Barcelona");
                intent.putExtra("flightPrice", "$400");
                startActivity(intent);
            }
        });

        flightCard4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Gérer l'événement de clic pour le vol 4
                Intent intent = new Intent(FlightsActivity.this, ReservationActivity.class);
                intent.putExtra("flightName", "Flight from Tokyo to Sydney");
                intent.putExtra("flightPrice", "$1200");
                startActivity(intent);
            }
        });

        flightCard5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Gérer l'événement de clic pour le vol 5
                Intent intent = new Intent(FlightsActivity.this, ReservationActivity.class);
                intent.putExtra("flightName", "Flight from New York to Los Angeles");
                intent.putExtra("flightPrice", "$300");
                startActivity(intent);
            }
        });
    }
}
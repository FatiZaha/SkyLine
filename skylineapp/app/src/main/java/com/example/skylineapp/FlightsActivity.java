package com.example.skylineapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import java.util.ArrayList;
import java.util.List;

public class FlightsActivity extends AppCompatActivity {

    private List<String> flightNames;
    private List<String> flightPrices;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flights);

        // Initialize flight names and prices
        flightNames = new ArrayList<>();
        flightNames.add("Flight from London to Marrakech");
        flightNames.add("Flight from Paris to New York");
        flightNames.add("Flight from Rome to Barcelona");
        flightNames.add("Flight from Tokyo to Sydney");
        flightNames.add("Flight from New York to Los Angeles");

        flightPrices = new ArrayList<>();
        flightPrices.add("$500");
        flightPrices.add("$800");
        flightPrices.add("$400");
        flightPrices.add("$1200");
        flightPrices.add("$300");

        // Get the flight card IDs
        int[] flightCardIds = {R.id.flight1};

        // Loop through the flight cards
        for (int i = 0; i < flightCardIds.length; i++) {
            final int flightIndex = i;
            CardView flightCard = findViewById(flightCardIds[i]);
            flightCard.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent intent = new Intent(FlightsActivity.this, ReservationActivity.class);
                    intent.putExtra("flightName", flightNames.get(flightIndex));
                    intent.putExtra("flightPrice", flightPrices.get(flightIndex));
                    startActivity(intent);
                }
            });
        }
    }
}
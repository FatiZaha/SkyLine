package com.example.skylineapp;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class PanierActivity extends AppCompatActivity {

    private TextView reservationTitleTextView;
    private ImageView flightImage1;
    private TextView flightPath1;
    private TextView flightDetails1;
    private TextView flightPrice1;
    private ImageView flightImage2;
    private TextView flightPath2;
    private TextView flightDetails2;
    private TextView flightPrice2;
    private ImageView flightImage3;
    private TextView flightPath3;
    private TextView flightDetails3;
    private TextView flightPrice3;
    private Button checkoutButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_panier);

        // Les vues de la mise en page XML
        reservationTitleTextView = findViewById(R.id.reservation_title);
        flightImage1 = findViewById(R.id.flight_image1);
        flightPath1 = findViewById(R.id.flight_path1);
        flightDetails1 = findViewById(R.id.flight_details1);
        flightPrice1 = findViewById(R.id.flight_price1);
        flightImage2 = findViewById(R.id.flight_image2);
        flightPath2 = findViewById(R.id.flight_path2);
        flightDetails2 = findViewById(R.id.flight_details2);
        flightPrice2 = findViewById(R.id.flight_price2);
        flightImage3 = findViewById(R.id.flight_image3);
        flightPath3 = findViewById(R.id.flight_path3);
        flightDetails3 = findViewById(R.id.flight_details3);
        flightPrice3 = findViewById(R.id.flight_price3);
        checkoutButton = findViewById(R.id.checkout_button);

        // Les valeurs des vues
        reservationTitleTextView.setText("Reservation History");

        // Pour l'instant, nous n'affichons qu'une seule image
      //  flightImage1.setImageResource(R.drawable.flight_image1);
        flightPath1.setText("Flight Path");
        flightDetails1.setText("From London to Marrakech");
        flightPrice1.setText("Price: $100");

      //  flightImage2.setImageResource(R.drawable.flight_image2);
        flightPath2.setText("Flight Path");
        flightDetails2.setText("From Paris to Rome");
        flightPrice2.setText("Price: $150");

      //  flightImage3.setImageResource(R.drawable.flight_image3);
        flightPath3.setText("Flight Path");
        flightDetails3.setText("From New York to Los Angeles");
        flightPrice3.setText("Price: $200");

        checkoutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.out.println("Submit button clicked !");
            }
        });
    }
}
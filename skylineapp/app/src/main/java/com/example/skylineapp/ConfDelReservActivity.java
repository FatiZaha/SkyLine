package com.example.skylineapp;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class ConfDelReservActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_conf_del_reserv);

        Button buttonConfirmReservation = findViewById(R.id.buttonConfirmReservation);
        Button buttonDeleteReservation = findViewById(R.id.buttonDeleteReservation);

        buttonConfirmReservation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showConfirmationDialog();
            }
        });

        buttonDeleteReservation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showDeletionDialog();
            }
        });
    }

    private void showConfirmationDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Confirmation")
                .setMessage("Are you sure you want to make a reservation?")
                .setPositiveButton("Confirm Reservation", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        // Code pour confirmer la réservation
                    }
                })
                .setNegativeButton("Cancel", null)
                .show();
    }

    private void showDeletionDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Confirmation")
                .setMessage("Are you sure you want to delete the reservation?")
                .setPositiveButton("Delete Reservation", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        // Code pour supprimer la réservation
                    }
                })
                .setNegativeButton("Cancel", null)
                .show();
    }
}



package com.example.skylineapp;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Calendar;

public class ReservationActivity extends AppCompatActivity {

    private EditText editTextCitySearch;
    private TextView textViewDepartureDate;
    private TextView textViewArrivalDate;
    private Spinner spinnerDepartureCity;
    private Spinner spinnerArrivalCity;
    private Button buttonSearch;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reservation);

        // Initialize views
        editTextCitySearch = findViewById(R.id.editTextCitySearch);
        textViewDepartureDate = findViewById(R.id.textViewDepartureDate);
        textViewArrivalDate = findViewById(R.id.textViewArrivalDate);
        spinnerDepartureCity = findViewById(R.id.spinnerDepartureCity);
        spinnerArrivalCity = findViewById(R.id.spinnerArrivalCity);
        buttonSearch = findViewById(R.id.buttonSearch);

        // Set click listener for search button
        buttonSearch.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Perform search based on selected criteria
                String city = editTextCitySearch.getText().toString();
                String departureDate = textViewDepartureDate.getText().toString();
                String arrivalDate = textViewArrivalDate.getText().toString();
                String departureCity = spinnerDepartureCity.getSelectedItem().toString();
                String arrivalCity = spinnerArrivalCity.getSelectedItem().toString();

                // TODO: Perform flight search and display results
            }
        });

        // Set click listeners for date selection
        textViewDepartureDate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showDatePickerDialog(textViewDepartureDate);
            }
        });

        textViewArrivalDate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showDatePickerDialog(textViewArrivalDate);
            }
        });
    }

    private void showDatePickerDialog(final TextView textView) {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(ReservationActivity.this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        // Update the TextView with the selected date
                        String selectedDate = dayOfMonth + "/" + (month + 1) + "/" + year;
                        textView.setText(selectedDate);
                    }
                }, year, month, dayOfMonth);

        // Show the date picker dialog
        datePickerDialog.show();
    }
}
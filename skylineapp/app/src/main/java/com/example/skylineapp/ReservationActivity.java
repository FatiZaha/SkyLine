package com.example.skylineapp;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import android.app.AlertDialog;
import android.content.DialogInterface;
public class ReservationActivity extends AppCompatActivity {

    private DatePicker datePicker;
    private EditText editTextDuration;
    private Spinner spinnerCity;
    private Spinner spinnerClass;
    private Button buttonReserve;
    private ListView listViewReservations;
    private TextView textViewDepartureDate;

    private Button buttonConfirmReserve;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reservation);

        // Initialize views
        datePicker = findViewById(R.id.datePickerDepartureDate);
        editTextDuration = findViewById(R.id.editTextDuration);
        spinnerCity = findViewById(R.id.spinnerCity);
        spinnerClass = findViewById(R.id.spinnerClass);
        buttonReserve = findViewById(R.id.buttonReserve);
        listViewReservations = findViewById(R.id.listViewReservations);
        textViewDepartureDate = findViewById(R.id.textViewDepartureDate);

        // Set up the spinner for cities
        ArrayAdapter<CharSequence> cityAdapter = ArrayAdapter.createFromResource(this, R.array.city_array, android.R.layout.simple_spinner_item);
        cityAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerCity.setAdapter(cityAdapter);

        // Set up the spinner for flight classes
        ArrayAdapter<CharSequence> classAdapter = ArrayAdapter.createFromResource(this, R.array.class_array, android.R.layout.simple_spinner_item);
        classAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerClass.setAdapter(classAdapter);

        buttonReserve.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String city = spinnerCity.getSelectedItem().toString();
                String duration = editTextDuration.getText().toString();
                String flightClass = spinnerClass.getSelectedItem().toString();
                String departureDate = textViewDepartureDate.getText().toString();

                // Display a toast message
                Toast.makeText(ReservationActivity.this, "Reservation made: " + city + ", " + departureDate + ", " + duration + ", " + flightClass, Toast.LENGTH_SHORT).show();
            }
        });

        textViewDepartureDate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showDatePickerDialog();
            }
        });

        // Set up the list view
        List<String> reservationsList = new ArrayList<>();
        ArrayAdapter<String> reservationsAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, reservationsList);
        listViewReservations.setAdapter(reservationsAdapter);
    }

    private void showDatePickerDialog() {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(ReservationActivity.this,
                new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        String selectedDate = dayOfMonth + "/" + (month + 1) + "/" + year;
                        textViewDepartureDate.setText(selectedDate);
                    }
                }, year, month, dayOfMonth);

        datePickerDialog.show();
    }
}
package com.example.skylineapp;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.content.Intent;

public class ProfileActivity extends AppCompatActivity {

    private ImageView profileImage;
    private Button editProfileImageButton;
    private EditText nameEditText;
    private EditText emailEditText;
    private Button saveButton;

    private ImageView homeButton;
    private ImageView searchButton;
    private ImageView cartButton;
    private ImageView profileButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        // Initialize views
        profileImage = findViewById(R.id.profile_image);
        editProfileImageButton = findViewById(R.id.edit_profile_image_button);
        nameEditText = findViewById(R.id.name_edittext);
        emailEditText = findViewById(R.id.email_edittext);
        saveButton = findViewById(R.id.save_button);

        // Set click listener for edit profile image button
        editProfileImageButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Handle edit profile image button click event
                // Implement your desired functionality here
            }
        });

        // Set click listener for save button
        saveButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Handle save button click event
                String name = nameEditText.getText().toString();
                String email = emailEditText.getText().toString();

                // Perform necessary actions with the edited profile data
            }
        });
        homeButton = findViewById(R.id.home_button);
        homeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(ProfileActivity.this, MainActivity.class);
                startActivity(intent);
            }
        });
        searchButton = findViewById(R.id.search_button);
        searchButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ProfileActivity.this, FlightsActivity.class);
                startActivity(intent);
            }
        });
        cartButton = findViewById(R.id.cart_button);
        cartButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(ProfileActivity.this, ReservationActivity.class);
                startActivity(intent);
            }
        });
        profileButton = findViewById(R.id.profile_button);
        profileButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(ProfileActivity.this, ProfileActivity.class);
                startActivity(intent);
            }
        });
    }
}
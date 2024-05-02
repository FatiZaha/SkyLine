package com.example.skylineapp;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class PaymentActivity extends Activity {

    private EditText editTextCardNumber;
    private EditText editTextExpiryDate;
    private EditText editTextCVV;
    private EditText editTextName;
    private EditText editTextEmail;
    private EditText editTextTel;
    private Button buttonPay;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);

        // Get references to the views from the layout
        editTextCardNumber = findViewById(R.id.editTextCardNumber);
        editTextExpiryDate = findViewById(R.id.editTextExpiryDate);
        editTextCVV = findViewById(R.id.editTextCVV);
        editTextName = findViewById(R.id.editTextName);
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextTel = findViewById(R.id.editTextTel);
        buttonPay = findViewById(R.id.buttonPay);

        buttonPay.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String cardNumber = editTextCardNumber.getText().toString();
                String expiryDate = editTextExpiryDate.getText().toString();
                String cvv = editTextCVV.getText().toString();
                String name = editTextName.getText().toString();
                String email = editTextEmail.getText().toString();
                String tel = editTextTel.getText().toString();


                if (cardNumber.isEmpty() || expiryDate.isEmpty() || cvv.isEmpty()
                        || name.isEmpty() || email.isEmpty() || tel.isEmpty()) {

                    Toast.makeText(PaymentActivity.this, "Please fill in all fields", Toast.LENGTH_SHORT).show();
                } else {

                    performPayment(cardNumber, expiryDate, cvv, name, email, tel);
                }
            }
        });
    }

    private void performPayment(String cardNumber, String expiryDate, String cvv,
                                String name, String email, String tel) {
        // TODO: Implement the payment processing logic
        Toast.makeText(this, "Payment processed!", Toast.LENGTH_SHORT).show();
    }
}
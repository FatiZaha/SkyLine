package com.example.skylineapp.restapi;

import com.example.skylineapp.model.Client;
import com.example.skylineapp.service.ClientService;

import org.json.JSONException;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import retrofit2.Response;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RESTClient {
    private static final String BASE_URL = "http://localhost:8080/api"; // Replace with your actual API base URL
    private Retrofit retrofit;

    public RESTClient() {
        retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public Client registerUser(String nom, String prenom, String password, String email) throws JSONException, IOException {
        Client client = new Client();
        client.setNom(nom);
        client.setPrenom(prenom);
        client.setEmail(email);
        client.setPassword(password);

        ClientService clientService = retrofit.create(ClientService.class);

        Call<Client> call = clientService.Inscription(client);
        Response<Client> response = call.execute();

        if (response.isSuccessful()) {
            return response.body();
        } else {
            return null;
        }
    }

    public Client loginUser(String username, String password) throws IOException {
        ClientService clientService = retrofit.create(ClientService.class);

        Call<Client> call = clientService.Connexion(username, password);
        Response<Client> response = call.execute();

        if (response.isSuccessful()) {
            return response.body();
        } else {
            return null;
        }
    }
}
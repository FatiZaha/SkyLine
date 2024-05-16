package com.example.skylineapp.service;

import com.example.skylineapp.model.Client;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.*;

public interface  ClientService {
    @POST("/inscription")
    Call<Client> Inscription(@Body Client requestBody);
    @GET("/connexion")
    Call<Client> Connexion(@Query("email") String email, @Query("password") String password);
}

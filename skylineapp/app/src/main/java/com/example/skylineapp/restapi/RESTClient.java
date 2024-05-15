package com.example.skylineapp.restapi;

import com.example.skylineapp.model.Client;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.lang.reflect.Type;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.security.cert.CertificateException;
import com.google.gson.reflect.TypeToken;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class RESTClient {
    private static final String BASE_URL = "http://localhost:8080/api"; // Replace with your actual API base URL

    private OkHttpClient client;

    public RESTClient() {
        client = new OkHttpClient(); // Create an instance of OkHttpClient
    }


    public void registerUser(String username, String password, String email) throws JSONException {
        // Create a JSON object for the user registration data
        JSONObject requestBody = new JSONObject();
        requestBody.put("username", username);
        requestBody.put("password", password);
        requestBody.put("email", email);

        // Create a request
        RequestBody body = RequestBody.create(MediaType.parse("application/json"), requestBody.toString());
        Request request = new Request.Builder()
                .url(BASE_URL + "/inscription")
                .post(body)
                .build();

        try {
            // Execute the request
            Response response = client.newCall(request).execute();

            // Check the response
            if (response.isSuccessful()) {
                System.out.println("User registration successful");
            } else {
                System.out.println("User registration failed with code: " + response.code());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Object loginUser(String username, String password) throws JSONException {
        // Create a JSON object for the user login data


        // Create a request
        
        Request request = new Request.Builder()
                .url(BASE_URL + "/connexion?email="+username+"&password="+password)
                .build();

        try {
            // Execute the request
            Response response = client.newCall(request).execute();

            // Check the response
            if (response.isSuccessful()) {
                String responseData = response.body().string();

                // Parse the JSON response using Gson
                Gson gson = new Gson();
                Type clientType = new TypeToken<Client>() {
                }.getType();
                Client client_info = gson.fromJson(responseData, clientType);
                return client_info;
            } else {
                return null;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }




}


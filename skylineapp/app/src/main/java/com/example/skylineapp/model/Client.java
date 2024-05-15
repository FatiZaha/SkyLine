package com.example.skylineapp.model;
import com.example.skylineapp.dto.AirlinesDto;
import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

public class Client {

    @SerializedName("id")
    private Long id;

    @SerializedName("nom")
    private String nom;

    @SerializedName("prenom")
    private String prenom;

    @SerializedName("email")
    private String email;

    @SerializedName("tel")
    private String tel;

    @SerializedName("password")
    private String password;

    @SerializedName("resetPasswordToken")
    private String resetPasswordToken;

    @SerializedName("reservations")
    private List<Reservation> reservations = new ArrayList<>();

    @SerializedName("fav")
    private List<AirlinesDto> fav=new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getResetPasswordToken() {
        return resetPasswordToken;
    }

    public void setResetPasswordToken(String resetPasswordToken) {
        this.resetPasswordToken = resetPasswordToken;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<AirlinesDto> getFav() {
        return fav;
    }

    public void setFav(List<AirlinesDto> fav) {
        this.fav = fav;
    }

    public Client(Long id, String nom, String prenom, String email, String tel, String password, String resetPasswordToken, List<Reservation> reservations, List<AirlinesDto> fav) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.password = password;
        this.resetPasswordToken = resetPasswordToken;
        this.reservations = reservations;
        this.fav = fav;
    }

    public Client() {
    }
}

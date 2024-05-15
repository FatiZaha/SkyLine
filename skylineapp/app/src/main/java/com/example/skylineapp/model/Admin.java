package com.example.skylineapp.model;

import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;
import java.util.List;

public class Admin {


    @SerializedName("id")
    private long id;

    @SerializedName("login")
    private String login;
    @SerializedName("password")
    private String password;

    @SerializedName("compagnies")
    private List<Compagnie> companies = new ArrayList<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Compagnie> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Compagnie> companies) {
        this.companies = companies;
    }

    public Admin() {
    }

    public Admin(long id, String login, String password, List<Compagnie> companies) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.companies = companies;
    }
}

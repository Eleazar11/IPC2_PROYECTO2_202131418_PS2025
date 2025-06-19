/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.batibellezaapi.models;

/**
 *
 * @author eleaz
 */
public class Usuario {
    private String dpi;
    private String correo;
    private String contrasena;
    private Rol rol;


    public Usuario(String dpi, String correo, String contrasena, Rol rol) {
        this.dpi = dpi;
        this.correo = correo;
        this.contrasena = contrasena;
        this.rol = rol;
    }
    
    public String getDpi() {
        return dpi;
    }

    public void setDpi(String dpi) {
        this.dpi = dpi;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }
    
}

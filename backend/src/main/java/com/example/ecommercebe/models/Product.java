package com.example.ecommercebe.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

@Data
@Entity
@Getter
@Table(name = "products")
public class Product {
    @Id
    private int id;

    private String title;
    private String description;
    private double price;
    private double discount;
    private double rating;
    private int stock;
    private String brand;
    private String category;
    private String thumbnail;

}
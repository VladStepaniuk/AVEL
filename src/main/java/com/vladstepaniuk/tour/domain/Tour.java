package com.vladstepaniuk.tour.domain;

import javax.persistence.*;
import java.sql.Timestamp;


@Entity
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private int rating;
    private int price;
    private String place;
    private String description;
    private int inStock;
    private Timestamp createdDate;
    private String filePath;


    public Tour(String title, int rating, int price, String place, String description, int inStock,
                Timestamp createdDate, String filePath) {
        this.title = title;
        this.rating = rating;
        this.price = price;
        this.place = place;
        this.description = description;
        this.inStock = inStock;
        this.createdDate = createdDate;
        this.filePath = filePath;
    }

    public Tour() {

    }


    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getInStock() {
        return inStock;
    }

    public void setInStock(int inStock) {
        this.inStock = inStock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
}

package com.vladstepaniuk.tour.payload.response;

import java.sql.Timestamp;

public class TourResponse {
    private Long id;
    private String title;
    private int rating;
    private int price;
    private String description;
    private int inStock;
    private String place;
    private String path;
    private Timestamp date;
    private boolean isContain;

    public TourResponse(Long id, String title, int rating,
                        int price, String description, int inStock,
                        String place, String path, Timestamp date, boolean isContain) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
        this.place = place;
        this.path = path;
        this.date = date;
        this.isContain = isContain;
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

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public boolean isContain() {
        return isContain;
    }

    public void setContain(boolean contain) {
        isContain = contain;
    }
}

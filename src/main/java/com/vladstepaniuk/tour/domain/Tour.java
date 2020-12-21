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


    private String fileName;
    private String fileType;

    @Lob
    private byte[] fileData;

    private Timestamp createdDate;


    public Tour(String title, int rating, int price, String place, String description, int inStock,
                String fileName, Timestamp createdDate, String fileType, byte[] fileData) {
        this.fileName = fileName;
        this.title = title;
        this.rating = rating;
        this.price = price;
        this.place = place;
        this.description = description;
        this.inStock = inStock;
        this.createdDate = createdDate;
        this.fileData = fileData;
        this.fileType = fileType;
    }

    public Tour() {

    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
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
}

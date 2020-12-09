package com.ekart;

public class Product implements Comparable{
    private String title;
    private String brand;
    private float price;
    private float rating;

    public Product(String title, String brand, float price, float rating) {
        this.title = title;
        this.brand = brand;
        this.price = price;
        this.rating = rating;
    }

    public String getTitle() {
        return title;
    }

    public String getBrand() {
        return brand;
    }

    public float getPrice() {
        return price;
    }

    public float getRating() {
        return rating;
    }

    @Override
    public int compareTo(Object o) {
        return 0;
    }
}

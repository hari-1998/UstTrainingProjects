package com.ekart;

import java.util.List;

public class Store {
    public static List<Product> products = List.of(
            new Product("Shoe","Nike",1900f,4.5f),
            new Product("Shoe","Puma",1650f,4.0f),
            new Product("Shoe","Puma",999f,3.7f),
            new Product("Airpods","Mi",1200f,4.3f),
            new Product("Airpods","Boat",1250f,4.0f),
            new Product("Airpods","Mi",1400f,4.5f),
            new Product("Airpods","RealMe",1150f,4.3f)
    );
}
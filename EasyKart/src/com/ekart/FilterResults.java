package com.ekart;

import java.util.List;

public class FilterResults {


    static List<Product> products =  Store.products;

    public void addFilter(String title,
                               String brand,
                               float priceMin,
                               float priceMax,
                               float rating
    ) {

        products.stream()
                .filter(m -> m.getTitle().toLowerCase().equals(title.toLowerCase()))
                .filter(m -> m.getBrand().toLowerCase().equals(brand.toLowerCase()))
                .filter(m -> m.getPrice() >= priceMin)
                .filter(m -> m.getPrice() <= priceMax)
                .filter(m -> m.getRating() >= rating)
                .forEach(m -> System.out.println(m.getTitle() +" \t "+
                        m.getBrand()+" \t "+
                        m.getPrice()+" \t "+
                        m.getRating()));

    }

}

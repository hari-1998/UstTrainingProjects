package com.ekart;

public class DisplayProducts {

    private FilterResults filters;

    public DisplayProducts(FilterResults filters) {
        this.filters = filters;
    }

    public void show()
    {
        String title = Console.readString("Enter Title : ");
        String brand = Console.readString("Enter Brand : ");
        float priceMin = (float) Console.readNumber("Enter minimum price",0);
        float priceMax = (float) Console.readNumber("Enter Maximum Price",priceMin);
        float rating = (float) Console.readNumber("Enter rating (1-5)",1,5);
        filters.addFilter(title,brand,priceMin,priceMax,rating);
    }

}

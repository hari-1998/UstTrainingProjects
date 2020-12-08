package com.mortgage;

import java.text.NumberFormat;

public class MortgageReport implements GenerateReport {

    private final NumberFormat currency;
    private LoanCalculator calculator;

    public MortgageReport(LoanCalculator calculator){
        this.calculator = calculator;
        currency = NumberFormat.getCurrencyInstance();
    }

    @Override
    public void printMortgage() {
        double mortgage = calculator.calculateAmount();
        String mortgateFormatted = currency.format(mortgage);
        System.out.println();
        System.out.println("MORTGAGE");
        System.out.println("-------------------");
        System.out.println("Monthly Payments: " + mortgateFormatted);
    }

    @Override
    public void printPaymentSchedule() {
        System.out.println();
        System.out.println("PAYMENT SCHEDULE");
        System.out.println("*****************");
        for(double balance: calculator.getRemainingBalance())
            System.out.println(currency.format(balance));
    }
}

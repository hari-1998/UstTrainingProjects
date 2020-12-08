package com.mortgage;

public interface LoanCalculator {

    double calculateBalance(short numberOfPaymentsMade);

    double calculateAmount();

    double[] getRemainingBalance();
}

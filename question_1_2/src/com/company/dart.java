package com.company;

/**
 * Anita
 * 8/20/2020
 */

public class dart {

    public static int score(double x, double y) {
        double result;

        result = (Math.pow(x, 2) + Math.pow(y, 2));

        if (result <= 100 && result > 25) {
            return 1;
        }
        if (result <= 25 && result > 1) {
            return 5;
        }

        if (result <= 1 && result >= 0) {
            return 10;
        }

        return 0;
    }

    public static void main(String[] args) {
        // write your code here

        double x=0;
        double y=10;
        System.out.println(score(x,y));
    }
}
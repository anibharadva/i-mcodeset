package com.company;

import org.junit.Assert;

/**
 * Anita
 * 8/23/2020
 */

public class knapsacktest {
    @org.junit.Test
    public void Test1() throws Exception{
        int val[] = {10, 40, 30, 50};

        int wt[] = {5, 4, 6, 4};

        int W = 10;
        int result;
        int expected=90;
        knapsack clsknapsack = new knapsack();
        result=  clsknapsack.knapsack(val,wt,W);
       Assert.assertEquals(expected,result);
    }

    @org.junit.Test
    public void Test2() throws Exception{
        int val[] = {10, 50, 30, 50};

        int wt[] = {5, 8, 6, 4};

        int W = 12;
        int result;
        int expected=100;
        knapsack clsknapsack = new knapsack();
        result=  clsknapsack.knapsack(val,wt,W);
        Assert.assertEquals(expected,result);
    }
}

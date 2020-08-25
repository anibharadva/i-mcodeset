package com.company;

import org.junit.Assert;

/**
 * Anita
 * 8/20/2020
 */

public class dartTest {

    @org.junit.Test
    public void Test1() throws Exception{
        double x=0;
        double y=4;
        int result=0;
        int expected=5;
        dart clsDart = new dart();
        result=  clsDart.score(x,y);
        Assert.assertEquals(expected,result);
    }

    @org.junit.Test
    public void Test2() throws Exception{
        double x=0.8;
        double y=-0.8;
        int result=0;
        int expected=5;
        dart clsDart = new dart();
        result= clsDart.score(x,y);
        Assert.assertEquals(expected,result);
    }
}
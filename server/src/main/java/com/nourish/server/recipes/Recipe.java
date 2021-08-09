package com.nourish.server.recipes;

import org.springframework.web.bind.annotation.RestController;

public class Recipe {

    private int id;
    private String title;
    private int authorid;
    private String[][] ingredients;
    private String[][] preparation;
    private int hours;
    private int minutes;
    private double cost;
    private boolean vegan;
    private boolean lactose;
    private String image;

//    public Recipe() {
//
//    }

    public Recipe(int id, String title, int authorid, String[][] ingredients, String[][] preparation, int hours, int minutes, double cost, boolean vegan, boolean lactose, String image) {
        super();
        this.id = id;
        this.title = title;
        this.authorid = authorid;
        this.ingredients = ingredients;
        this.preparation = preparation;
        this.hours = hours;
        this.minutes = minutes;
        this.cost = cost;
        this.vegan = vegan;
        this.lactose = lactose;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getAuthorid() {
        return authorid;
    }

    public void setAuthorid(int authorid) {
        this.authorid = authorid;
    }

    public String[][] getIngredients() {
        return ingredients;
    }

    public void setIngredients(String[][] ingredients) {
        this.ingredients = ingredients;
    }

    public String[][] getPreparation() {
        return preparation;
    }

    public void setPreparation(String[][] preparation) {
        this.preparation = preparation;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        this.minutes = minutes;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public boolean isVegan() {
        return vegan;
    }

    public void setVegan(boolean vegan) {
        this.vegan = vegan;
    }

    public boolean isLactose() {
        return lactose;
    }

    public void setLactose(boolean lactose) {
        this.lactose = lactose;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}

package com.nourish.server.recipes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class RecipeController {

public class Ingredient {
    public int id;
    public String name;

    public Ingredient(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

    @RequestMapping("/all-recipes")
    public List<Recipe> getAllRecipes() {
        Ingredient[] ingredients = {new Ingredient(123, "carot"),
                                    new Ingredient(456, "cheese"),
                                    new Ingredient(789, "bread")};
        String[] preparations = {"chop carrots", "grate cheese", "slice bread"};


        System.out.println(ingredients);

        return Arrays.asList(
                new Recipe(1234, "Title1", 1234, null, null, 1, 30, 5.0, false, false, "n/a"),
                new Recipe(5678, "Title2", 5678, null, null, 1, 30, 4.0, false, false, "n/a"),
                new Recipe(9123, "Title3", 9123, null, null, 1, 30, 3.5, false, false, "n/a")
        );
    }
}
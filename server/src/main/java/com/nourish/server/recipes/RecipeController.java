package com.nourish.server.recipes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class RecipeController {

    @RequestMapping("/all-recipes")
    public List<Recipe> getAllRecipes() {
        String[] ingredients = {"carrot", "cheese", "bread"};
        String[] preparations = {"chop carrots", "grate cheese", "slice bread"};

        return Arrays.asList(
                new Recipe(1234, "Title1", 1234, ingredients, preparations, 1, 30, 5.0, false, false, "n/a"),
                new Recipe(5678, "Title2", 5678, ingredients, preparations, 1, 30, 4.0, false, false, "n/a"),
                new Recipe(9123, "Title3", 9123, ingredients, preparations, 1, 30, 3.5, false, false, "n/a")
        );
    }
}

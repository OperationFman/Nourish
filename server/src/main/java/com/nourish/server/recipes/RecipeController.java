package com.nourish.server.recipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class RecipeController {

    public class Ingredients {
        public String name;

        public Ingredients(String name) {

            this.name = name;
        }

        public String toString() {
            return name;
        };
    }

    @Autowired
    private RecipeService recipeService;


    @RequestMapping("/all-recipes")
    public List<Recipe> getAllRecipes() {
        String[] ingredients = {"carrot", "cheese", "bread"};
        String[] preparations = {"chop carrots", "grate cheese", "slice bread"};

        ArrayList<Ingredients> list = new ArrayList<Ingredients>();
        list.add(new Ingredients("carrot"));
        list.add(new Ingredients("cheese"));

        System.out.println(list);


        return Arrays.asList(
                new Recipe(1234, "Title1", 1234, list, list, 1, 30, 5.0, false, false, "n/a"),
                new Recipe(5678, "Title2", 5678, list, list, 1, 30, 4.0, false, false, "n/a"),
                new Recipe(9123, "Title3", 9123, list, list, 1, 30, 3.5, false, false, "n/a")
        );
    }
}

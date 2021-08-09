package com.nourish.server.recipes;

import org.springframework.web.bind.annotation.RequestMapping;

public class RecipeController {

    @RequestMapping("/hello")
    public String sayHi() {
        return "Hi!";
    }
}

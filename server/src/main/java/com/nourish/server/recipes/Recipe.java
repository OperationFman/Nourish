package com.nourish.server.recipes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Recipe {

    @RequestMapping("/hello")
    public String sayHi() {
        return "Hi!";
    }
}

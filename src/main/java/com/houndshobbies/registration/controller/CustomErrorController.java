package com.houndshobbies.registration.controller;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomErrorController implements ErrorController {

    private static final String PATH = "/error";

    /**
     * This function returns the text to put on the error page in a JSON string.
     * @return String a string of JSON
     */
    @RequestMapping(value = PATH)
    public String error() {
        return "Error, An error has occured please make sure the route you are"
                + " trying to access is correct";
    }

    /**
     * This function returns the error path
     * @return PATH the error path
     */
    @Override
    public String getErrorPath() {
        return PATH;
    }
}

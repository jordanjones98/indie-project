package com.houndshobbies.registration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

/**
 * This class runs the Spring application
 */
@SpringBootApplication
public class RegistrationApplication extends SpringBootServletInitializer {

    /**
     * This function is needed to create a WAR
     * @param application the SpringApplicationBuilder
     */
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(RegistrationApplication.class);
    }

    /**
     * Run the spring application
     * @param args the arguments
     */
	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}
}

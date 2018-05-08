package com.houndshobbies.registration.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.junit.runner.RunWith;
import java.util.List;
import com.houndshobbies.registration.util.Database;

/**
 * This function tests the slug service.
 */
public class SlugTest {
    /**
     * This function asserts that the slugify function will take out spaces, and
     * capital letters.
     */
    @Test
    void slugTakesOutSpaces() {
        Slug slug = new Slug();
        String slugText = slug.slugify("Jordan Jones");
        assertEquals("jordan-jones", slugText);
    }

    /**
     * This function asserts that the slugify function will take out commas.
     */
    @Test
    void takeOutPuncuation() {
        Slug slug = new Slug();
        String slugText = slug.slugify("Jordan, Jones");
        assertEquals("jordan-jones", slugText);
    }
}

package com.houndshobbies.registration.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import com.houndshobbies.registration.persistence.GenDao;
import com.houndshobbies.registration.entity.Event;
import com.houndshobbies.registration.entity.Class;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;
import java.util.List;
import com.houndshobbies.registration.util.Database;

/**
 * This function tests the SearchUser entity
 */
@SpringBootTest
public class SearchUserTest {

    /**
     * This function makes sure that the getFirstName parses, and returns the first name
     * of the user.
     */
    @Test
    void assertGettingFirstNameParsesName() {
        SearchUser searchUser = new SearchUser("jordan@jjones.tech", "Jordan Jones");
        assertEquals("Jordan", searchUser.getFirstName());
    }

    /**
     * This function makes sure that the getLastName parses, and returns the last name
     * of the user.
     */
    @Test
    void assertGettingLastNameParsesName() {
        SearchUser searchUser = new SearchUser("jordan@jjones.tech", "Jordan Jones");
        assertEquals("Jones", searchUser.getLastName());
    }

}

package com.houndshobbies.registration.entity;

import org.junit.jupiter.api.BeforeEach;
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

@SpringBootTest
public class ClassTest {

    GenDao dao;
    GenDao classDao;

    /**
     * This function gets called before each test, and resets the database to
     * a known state.
     */
    @BeforeEach
    void setUp() {
        dao = new GenDao(Class.class);
        Database database = Database.getInstance();
        database.runSQL("cleandb.sql");
    }

    /**
     * This function tests that you can get a class by it's id.
     */
    @Test
    void getClassById() {
        Class eventClass = (Class)dao.getById(1);
        assertNotNull(eventClass.getClassName());
    }

    /**
     * This function tests that you can create a new Class by the constructor.
     */
    @Test
    void createClassByConstructor() {

    }

}

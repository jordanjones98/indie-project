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

/**
 * This function tests the Event entity
 */
@SpringBootTest
public class EventTest {

	GenDao dao;
	GenDao classDao;

    /**
     * This function runs before each test, and creates daos, and sets the
     * database to a known state.
     */
	@BeforeEach
	void setUp() {
		dao = new GenDao(Event.class);
		classDao = new GenDao(Class.class);
		Database database = Database.getInstance();
		database.runSQL("cleandb.sql");
	}

    /**
     * This function tests that you can add a class to an event.
     */
	@Test
	void addClassToEventSuccess() {
		Event event = (Event)dao.getById(3);
		Class eventClass = (Class)classDao.getById(2);
		event.addClass(eventClass);
		dao.saveOrUpdate(event);
		Event newEvent = (Event)dao.getById(3);
		assertEquals(1, newEvent.getClasses().size());
	}

    /**
     * This function tests that the truncate about function will truncate a large about.
     */
    @Test
    void getTruncateAboutLargeAbout() {
        Event event = (Event)dao.getById(4);
        String truncateAbout = event.getTruncateAbout();
        assertEquals(224, truncateAbout.length());
    }

    /**
     * This function asserts that when you have a small about text it will return only that.
     */
    @Test
    void getTruncateAboutSmallAbout() {
        Event event = (Event)dao.getById(3);
        String truncateAbout = event.getTruncateAbout();
        assertEquals(89, truncateAbout.length());
    }

    /**
     * This function tests the many to many with classes
     */
    @Test
    void manyToManyWithClassesTest() {
        Event event = (Event)dao.getById(1);
        assertEquals(2, event.getClasses().size());
    }
}

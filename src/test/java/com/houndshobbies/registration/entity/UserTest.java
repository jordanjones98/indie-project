package com.houndshobbies.registration.entity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import com.houndshobbies.registration.persistence.GenDao;
import com.houndshobbies.registration.entity.User;
import com.houndshobbies.registration.entity.Event;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;
import java.util.List;
import com.houndshobbies.registration.persistence.GenDao;

@SpringBootTest
public class UserTest {

	GenDao dao;
	GenDao eventDao;

	@BeforeEach
	void setUp() {
		dao = new GenDao(User.class);
		eventDao = new GenDao(Event.class);
	}

	@Test
	void getUserTestSuccess() {
		List<User> users = dao.getAll();
		assertNotNull(users);
	}

    @Test
    void addEventToUserSuccess() {
        User user = (User)dao.getBySlug("jordan-jones");
        Event event = (Event)eventDao.getBySlug("test-event-blast");
        user.addEvent(event);
        assertEquals(2, user.getEvents().size());
    }

    @Test
    void removeEventFromUserSuccess() {
        User user = (User)dao.getBySlug("jordan-jones");
        Event event = (Event)eventDao.getBySlug("test-event-blast");
        user.addEvent(event);
        user.removeEvent(event);
        assertEquals(1, user.getEvents().size());
    }

}

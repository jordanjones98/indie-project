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


@RunWith(SpringRunner.class)
@SpringBootTest
public class EventTest {

	GenDao dao;
	GenDao classDao;

	@BeforeEach
	void setUp() {
		dao = new GenDao(Event.class);
		classDao = new GenDao(Class.class);
		System.out.println("Setting up!");
	}

	@Test
	void addClassToEventSuccess() {
		Event event = (Event)dao.getById(3);
		Class eventClass = (Class)classDao.getById(1);
		event.addClass(eventClass);
		dao.saveOrUpdate(event);
		Event newEvent = (Event)dao.getById(2);
		assertEquals(1, newEvent.getClasses().size());
		System.out.println("Test");
	}
}

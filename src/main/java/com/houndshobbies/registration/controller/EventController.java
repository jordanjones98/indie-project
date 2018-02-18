package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.houndshobbies.registration.Greeting;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.Event;


@RestController
public class EventController {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;

	public EventController() {
		dao = new GenDao(Event.class);
	}

	@RequestMapping("/events")
	public List<Event> events() {
		logger.info("Test!");
		List<Event> events = dao.getAll();
		return events;
	}
}

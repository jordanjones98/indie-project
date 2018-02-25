package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.Event;
import com.houndshobbies.registration.entity.Class;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/events")
public class EventController {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;
	private GenDao classDao;

	public EventController() {
		dao = new GenDao(Event.class);
		classDao = new GenDao(Class.class);
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<Event> events() {
		logger.info("Test!");
		List<Event> events = dao.getAll();
		return events;
	}

	/**
	 * This method gets an event by id.
	 * @return event
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Event getEvent(@PathVariable("id") int id) {
		return (Event)dao.getById(id);
	}

	/**
	 * This function attaches a class to an event.
	 * @param eventId the id of the event
	 * @param classId the id of the class to attach to the event
	 */
	@RequestMapping(value = "/{event}/add-class/{class}", method = RequestMethod.GET)
	public Event addEventClass(@PathVariable("event") int eventId,
			@PathVariable("class") int classId) {
		Event event = (Event)dao.getById(eventId);
		Class eventClass = (Class)classDao.getById(classId);
		event.addClass(eventClass);
		dao.saveOrUpdate(event);
		Event newEvent = (Event)dao.getById(eventId);
		return newEvent;
	}

	/**
	 * This function detaches a class from an event.
	 * @param eventId the id of the event
	 * @param classId the id of the class
	 */
	@RequestMapping(value = "/{event}/remove-class/{class}", method = RequestMethod.GET)
	public Event removeEventClass(@PathVariable("event") int eventId,
			@PathVariable("class") int classId) {
		Event event = (Event)dao.getById(eventId);
		Class eventClass = (Class)classDao.getById(classId);
		event.removeClass(eventClass);
		return event;
		//dao.saveOrUpdate(event);
		//Event newEvent = (Event)dao.getById(eventId);
		//return newEvent;
	}
}

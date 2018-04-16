package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.Event;
import com.houndshobbies.registration.entity.Class;
import com.houndshobbies.registration.interfaces.Controller;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/events")
public class EventController implements Controller<Event> {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;
	private GenDao classDao;

	/**
	 * Constructor for EventController creates two GenDao's one for Event
	 * and one for Class
	 */
	public EventController() {
		dao = new GenDao(Event.class);
		classDao = new GenDao(Class.class);
	}

	/**
	 * This function gets all of the events
	 * @return events
	 */
	@RequestMapping(method = RequestMethod.GET)
	public List<Event> getAll() {
		List<Event> events = dao.getAll();
		return events;
	}

	/**
	 * This method gets an event by slug.
	 * @return event
	 */
	@RequestMapping(value = "/{slug}", method = RequestMethod.GET)
	public Event getBySlug(@PathVariable("slug") String slug) {
		return (Event)dao.getBySlug(slug);
	}


	/**
	 * This funciton inserts a new event into the database.
	 * @param entity the event sent by the client to insert
	 */
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(@RequestBody Event entity) {
		return dao.insert(entity);
	}

	/**
	 * This function updates an event.
	 * @param entity the event sent by the client to update
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(@RequestBody Event entity) {
		dao.saveOrUpdate(entity);
	}

	/**
	 * This function deletes an event from the database;
	 * @param entity the event sent by the client
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public void delete(@RequestBody Event entity) {
		dao.delete(entity);
	}

	/**
	 * This function attaches a class to an event.
	 * @param eventId the id of the event
	 * @param classId the id of the class to attach to the event
	 */
	@RequestMapping(value = "/{event}/add-class/{class}", method = RequestMethod.GET)
	public Event addEventClass(@PathVariable("event") String eventSlug,
			@PathVariable("class") String classSlug) {
		Event event = (Event)dao.getBySlug(eventSlug);
		Class eventClass = (Class)classDao.getBySlug(classSlug);
		event.addClass(eventClass);
		dao.saveOrUpdate(event);
		Event newEvent = (Event)dao.getBySlug(eventSlug);
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

package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.User;
import com.houndshobbies.registration.entity.Event;
import java.util.Set;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;
	private GenDao eventDao;

	public UserController() {
		dao = new GenDao(User.class);
		eventDao = new GenDao(Event.class);
	}

	/**
	 * This function handles getting all users
	 * @return users a list of all users
	 */
	@RequestMapping(method = RequestMethod.GET)
	public List<User> getAll() {
		List<User> users = dao.getAll();
		return users;
	}

	/**
	 * This function handles the insert of a user
	 * @param user the User object that is sent in with the request body
	 */
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(@RequestBody User user) {
		return dao.insert(user);
	}

	/**
	 * This function handles the update of a user
	 * @param user the User object that is sent in with the request body
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(@RequestBody User user) {
		dao.saveOrUpdate(user);
		return "Hopefully Updated!";
	}

	/**
	 * This function handles a delete of the user
	 * @param user the User object that is sent in with the request body
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public User delete(@RequestBody User user) {
		dao.delete(user);
		return user;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User getById(@PathVariable("id") int userId) {
		return (User)dao.getById(userId);
	}

	/**
	 * This function adds an event to a user.
	 * @param userId the userId sent in the URL
	 * @param eventId the eventId of the event to attach to the user
	 */
	@RequestMapping(value = "/{userId}/add-event/{event}", method = RequestMethod.GET)
	public User addEvent(@PathVariable("userId") int userId, @PathVariable("event") int eventId) {
		User user = (User)dao.getById(userId);
		Event event = (Event)eventDao.getById(eventId);
		user.addEvent(event);
		dao.saveOrUpdate(user);
		return user;
	}

	/**
	 * This funciton removes an event from a user.
	 * @param userId the id of the user to remove the event from
	 * @param eventId the id of the event to detach from the user
	 */
	@RequestMapping(value = "/{userId}/remove-event/{event}", method = RequestMethod.GET)
	public User removeEvent(@PathVariable("userId") int userId, @PathVariable("event") int eventId) {
		User user = (User)dao.getById(userId);
		Event event = (Event)eventDao.getById(eventId);
		user.removeEvent(event);
		dao.saveOrUpdate(user);
		return user;
	}
}

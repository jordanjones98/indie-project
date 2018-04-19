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
import com.houndshobbies.registration.entity.SearchUser;
import java.util.Set;
import com.houndshobbies.registration.interfaces.Controller;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class UserController implements Controller<User> {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;
	private GenDao eventDao;

	/**
	 * Constructor for the UserController, it creates two GenDao's one for
	 * User and one for Event.
	 */
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
	public int insert(@RequestBody User entity) {
		return dao.insert(entity);
	}

	/**
	 * This function handles the update of a user
	 * @param user the User object that is sent in with the request body
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(@RequestBody User entity) {
		dao.saveOrUpdate(entity);
	}

	/**
	 * This function handles a delete of the user
	 * @param user the User object that is sent in with the request body
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public void delete(@RequestBody User entity) {
		dao.delete(entity);
	}

    /**
     * This class accepts a SearchUser object, and searches for a user
     * if that user is not found then it creates a new user, and returns that user.
     * @param entity the SearchUser entity
     * @return User the searched, or created user
     */
    @RequestMapping(value = "/create-or-return", method = RequestMethod.POST)
    public User createOrUpdate(@RequestBody SearchUser entity) {
        List<User> user = (List<User>)dao.getByColumn("email", entity.getEmail());
        try {
            return user.get(0);
        } catch (IndexOutOfBoundsException e) {
            User newUser = new User(entity.getFirstName(), entity.getLastName(),
                    entity.getEmail(), 1, "a", "a");

            dao.insert(newUser);

            return newUser;
        }
    }

	/**
	 * This function gets a user by their slug
	 * @param slug the slug of the user
	 * @return the user entity
	 */
	@RequestMapping(value = "/{slug}", method = RequestMethod.GET)
	public User getBySlug(@PathVariable("slug") String slug) {
		return (User)dao.getBySlug(slug);
	}

	/**
	 * This function adds an event to a user.
	 * @param userId the userId sent in the URL
	 * @param eventId the eventId of the event to attach to the user
	 */
	@RequestMapping(value = "/{userSlug}/add-event/{eventSlug}", method = RequestMethod.GET)
	public User addEvent(@PathVariable("userSlug") String userSlug, @PathVariable("eventSlug") String eventSlug) {
		User user = (User)dao.getBySlug(userSlug);
		Event event = (Event)eventDao.getBySlug(eventSlug);
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

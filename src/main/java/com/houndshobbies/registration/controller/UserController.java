package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import com.houndshobbies.registration.Greeting;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.User;


@RestController
public class UserController {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;

	public UserController() {
		dao = new GenDao(User.class);
	}

	/**
	 * This function handles getting all users
	 * @return users a list of all users
	 */
	@RequestMapping(value = "/users", method = RequestMethod.GET)
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
}

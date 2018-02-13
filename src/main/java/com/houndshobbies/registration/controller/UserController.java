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
import com.houndshobbies.registration.entity.User;


@RestController
public class UserController {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;

	public UserController() {
		dao = new GenDao(User.class);
	}

	@RequestMapping("/users")
	public List<User> greeting(@RequestParam(value="firstName", defaultValue="null") String name) {
		logger.info("Test!");
		List<User> users = dao.getAll();
		return users;
	}

	@RequestMapping("/insert")
	public int insert() {
		User user = new User("Eric", "Jones", "ejones@wisc.edu", 1, "t");
		return dao.insert(user);
	}

	@RequestMapping("/update")
	public String update() {
		User user = dao.getById(9);
		user.setFirstName("New");
		dao.saveOrUpdate(user);
		return "Hopefully Updated!";
	}

	public String delete() {
		User user = dao.getById(9);
		dao.delete(user);
	}
}

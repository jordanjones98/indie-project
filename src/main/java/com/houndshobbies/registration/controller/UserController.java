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

	@RequestMapping("/users")
	public User greeting(@RequestParam(value="firstName", defaultValue="null") String name) {
		logger.info("Test!");
		GenDao dao = new GenDao(User.class);
		List<User> users = dao.getAll();
		return users.get(0);
	}
}

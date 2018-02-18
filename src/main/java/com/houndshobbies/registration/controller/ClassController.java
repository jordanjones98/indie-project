package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.Class;


@RestController
public class ClassController {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;

	public ClassController() {
		dao = new GenDao(Class.class);
	}

	@RequestMapping("/classes")
	public List<Class> classes() {
		List<Class> classes = dao.getAll();
		return classes;
	}
}

package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
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

	/**
	 * This function returns all of the classes.
	 * @return classes
	 */
	@RequestMapping("/classes")
	public List<Class> classes() {
		List<Class> classes = dao.getAll();
		return classes;
	}

	/**
	 * This funciton inserts a new class into the database.
	 * @param eventClass the class sent by the client to insert
	 */
	@RequestMapping(value = "/classes/insert", method = RequestMethod.POST)
	public int insert(@RequestBody Class eventClass) {
		return dao.insert(eventClass);
	}

	/**
	 * This function updates an class.
	 * @param eventClass the class sent by the client to update
	 */
	@RequestMapping(value = "/classes/update", method = RequestMethod.POST)
	public void update(@RequestBody Class eventClass) {
		dao.saveOrUpdate(eventClass);
	}

	/**
	 * This function deletes an event from the table.
	 * @param eventClass the Class object sent in by the client
	 */
	@RequestMapping(value = "/classes/delete", method = RequestMethod.POST)
	public void delete(@RequestBody Class eventClass) {
		dao.delete(eventClass);
	}
}

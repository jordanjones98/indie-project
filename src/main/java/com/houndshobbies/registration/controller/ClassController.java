package com.houndshobbies.registration.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;
import com.houndshobbies.registration.persistence.GenDao;
import java.util.List;
import com.houndshobbies.registration.entity.Class;
import com.houndshobbies.registration.interfaces.Controller;

@RestController
@RequestMapping("/classes")
public class ClassController implements Controller<Class> {
	private final Logger logger = LogManager.getLogger(this.getClass());

	private GenDao dao;

	/**
	 * Constructor for ClassController, creates one GenDao for Class.
	 */
	public ClassController() {
		dao = new GenDao(Class.class);
	}

	/**
	 * This function returns all of the classes.
	 * @return classes
	 */
	@RequestMapping(method = RequestMethod.GET)
	public List<Class> getAll() {
		List<Class> classes = dao.getAll();
		return classes;
	}

	/**
	 * This function gets the class by it's slug.
	 * @param slug the slug of the class
	 * @return the class entity
	 */
	@RequestMapping(value = "/:slug", method = RequestMethod.GET)
	public Class getBySlug(@PathVariable("slug") String slug) {
		return (Class)dao.getBySlug(slug);
	}

	/**
	 * This funciton inserts a new class into the database.
	 * @param eventClass the class sent by the client to insert
	 */
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public int insert(@RequestBody Class entity) {
		return dao.insert(entity);
	}

	/**
	 * This function updates an class.
	 * @param eventClass the class sent by the client to update
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void update(@RequestBody Class entity) {
		dao.saveOrUpdate(entity);
	}

	/**
	 * This function deletes an event from the table.
	 * @param eventClass the Class object sent in by the client
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public void delete(@RequestBody Class entity) {
		dao.delete(entity);
	}
}

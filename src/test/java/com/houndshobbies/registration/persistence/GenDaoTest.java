package com.houndshobbies.registration.persistence;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import com.houndshobbies.registration.persistence.GenDao;
import com.houndshobbies.registration.entity.User;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.junit.runner.RunWith;
import java.util.List;
import com.houndshobbies.registration.util.Database;

@SpringBootTest
public class GenDaoTest {

	GenDao dao;

	@BeforeEach
	void setUp() {
		dao = new GenDao(User.class);
		Database database = Database.getInstance();
		database.runSQL("cleandb.sql");
	}

	/**
	 * This function makes sure that the getAll function returns users.
	 */
	@Test
	void getAllUsersSuccess() {
		List<User> users = dao.getAll();
		assertNotNull(users);
	}

	/**
	 * This function tests that you are able to get an entity by it's Id
	 */
	@Test
	void getByIdSuccess() {
		User user = (User)dao.getById(1);
		assertNotNull(user);
		assertEquals("Mikayla", user.getFirstName());
	}

	/**
	 * This function tests that you are able to get an entity by the column
	 */
	@Test
	void getUserByColumnSuccess() {
		List<User> users = dao.getByColumn("firstName", "Jordan");
		assertNotNull(users);
		assertEquals(1, users.size());
	}

	/**
	 * This function tests inserting an entity into the database.
	 */
	@Test
	void insertSuccess() {
		User newUser = new User("Alex", "Ovechkin", "ovechkin@gmail.com", 1111111111, "alex-ovechkin", false);
		int id = dao.insert(newUser);
		assertNotNull(id);
		assertNotEquals(0, id);
		User user = (User)dao.getById(id);
		assertEquals("Alex", user.getFirstName());
	}

	/**
	 * This function tests deleting an entity.
	 */
	@Test
	void deleteSuccess() {
		dao.delete((User)dao.getById(1));
		assertNull((User)dao.getById(1));
	}

	/**
	 * This function tests updating an entity.
	 */
	@Test
	void updateSuccess() {
		User user = (User)dao.getById(2);
		user.setFirstName("Jill");
		dao.saveOrUpdate(user);
		User updatedUser = (User)dao.getById(2);
		assertEquals("Jill", updatedUser.getFirstName());
	}
}

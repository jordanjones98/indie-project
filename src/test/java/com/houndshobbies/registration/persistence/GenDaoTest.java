package com.houndshobbies.registration.persistence;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import com.houndshobbies.registration.persistence.GenDao;
import com.houndshobbies.registration.entity.User;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;
import java.util.List;

@SpringBootTest
public class GenDaoTest {

	GenDao dao;

	@BeforeEach
	void setUp() {
		dao = new GenDao(User.class);
	}

	@Test
	void getAllUsersSuccess() {
		List<User> users = dao.getAll();
		assertNotNull(users);
	}

	@Test
	void getByIdSuccess() {
		User user = dao.getById(1);
		assertNotNull(user);
		assertEquals("Jordan", user.getFirstName());
	}

	@Test
	void getUserByColumnSuccess() {
		List<User> users = dao.getByColumn("firstName", "Jordan");
		assertNotNull(users);
		assertEquals(1, users.size());
	}

	@Test
	void insertSuccess() {
		User newUser = new User("Jeff", "Johnson", "jjohnson@gmail.com", 1111111111, "a");
		int id = dao.insert(newUser);
		assertNotNull(id);
		assertNotEquals(0, id);
		assertEquals("Jeff", dao.getById(id).getFirstName());
	}

	@Test
	void deleteSuccess() {
		dao.delete(dao.getById(1));
		assertNull(dao.getById(1));
	}

	@Test
	void updateSuccess() {
		User user = dao.getById(2);
		user.setFirstName("Jill");
		dao.saveOrUpdate(user);
		assertEquals("Jill", dao.getById(2).getFirstName());
	}
}

package com.houndshobbies.registration.entity;

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

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {

	GenDao dao;

	@BeforeEach
	void setUp() {
		dao = new GenDao(Event.class);
	}

	@Test
	void getUserTestSuccess() {
		List<User> users = dao.getAll();
		assertNotNull(users);
	}

}

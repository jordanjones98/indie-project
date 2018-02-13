package com.houndshobbies.registration.entity;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity(name = "User")
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="native")
	@GenericGenerator(name = "native", strategy = "native")
	private int id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email")
	private String email;

	@Column(name = "phone_number")
	private int phoneNumber;

	@Column(name = "password")
	private String password;

	public User() {
	}

	public User(String firstName, String lastName, String email, int phoneNumber, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public String getPassword() {
		return password;
	}
}

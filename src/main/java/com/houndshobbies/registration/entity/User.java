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

	/**
	 * This is a constructor, that makes a new user entity
	 * @param firstName the first name of the user
	 * @param lastName the last name of the user
	 * @param email the email of the user
	 * @param phoneNumber the phone number of the user
	 * @param password the password of the user
	 */
	public User(String firstName, String lastName, String email, int phoneNumber, String password) {;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}

	/**
	 * This function returns the first name of the user.
	 * @return firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * This function sets the firstName.
	 * @param firstName the first name of the user
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * This function returns the last name of the user.
	 * @return lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * This function returns the email of the user.
	 * @return email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * This function returns the phoneNumber of the user.
	 * @return phoneNumber
	 */
	public int getPhoneNumber() {
		return phoneNumber;
	}

	/**
	 * This function returns the password of the user.
	 * @return password
	 */
	public String getPassword() {
		return password;
	}
}
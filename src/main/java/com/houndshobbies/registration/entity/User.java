package com.houndshobbies.registration.entity;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import java.util.HashSet;
import java.util.Set;

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
	private long phoneNumber;

    @Column(name = "slug")
    private String slug;

    @Column(name = "admin")
    private boolean admin;

	@ManyToMany(cascade = { CascadeType.PERSIST }, fetch = FetchType.EAGER)
	@JoinTable(
		name="user_event",
		joinColumns = { @JoinColumn(name="user_id") },
		inverseJoinColumns = { @JoinColumn(name="event_id") }
	)
	private Set<Event> events = new HashSet<>();

	public User() {
	}

	/**
	 * This is a constructor, that makes a new user entity
	 * @param firstName the first name of the user
	 * @param lastName the last name of the user
	 * @param email the email of the user
	 * @param phoneNumber the phone number of the user
     * @param slug the slug of the user
     * @param admin boolean if user is admin
	 */
	public User(String firstName, String lastName, String email, long phoneNumber, String slug, boolean admin) {;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.slug = slug;
        this.admin = admin;
	}

    /**
     * This function returns the Id of the user.
     * @return id the unique id of the user
     */
	public int getId() {
		return id;
	}

    /**
     * This function sets the Id of the user.
     */
	public void setId(int id) {
		this.id = id;
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
	public long getPhoneNumber() {
		return phoneNumber;
	}

    /**
     * This function returns the slug of the user.
     * @return slug
     */
    public String getSlug() {
        return slug;
    }

    /**
     * This function sets the slug for the user.
     * @param slug the user's slug
     */
    public void setSlug(String slug) {
        this.slug = slug;
    }

    /**
     * This function returns the admin boolean for the user.
     * @return admin
     */
    public boolean getAdmin() {
        return admin;
    }

	/**
	 * This functon returns the events that the user is in.
	 * @return events
	 */
	public Set<Event> getEvents() {
		return events;
	}

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

	/**
	 * This class adds an event to the current User.
	 * @param event the event to add to the user
	 */
	public void addEvent(Event event) {
		events.add(event);
	}

	/**
	 * This class removes an event from the current User.
	 * @param event the event to remove from the user
	 */
	public void removeEvent(Event event) {
		events.remove(event);
	}
}

package com.houndshobbies.registration.entity;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "Event")
@Table(name = "events")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="native")
	@GenericGenerator(name = "native", strategy = "native")
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "about")
	private String about;

	@Column(name = "date")
	private String date;

	@ManyToMany(cascade = { CascadeType.PERSIST }, fetch = FetchType.EAGER)
	@JoinTable(
		name="event_class",
		joinColumns = { @JoinColumn(name="event_id") },
		inverseJoinColumns = { @JoinColumn(name="class_id") }
	)
	private Set<Class> classes = new HashSet<>();

	@ManyToMany(mappedBy = "events")
	private Set<User> users = new HashSet<>();

	public Event() {

	}

	/**
	 * This constructor creates a new Event
	 * @param id
	 * @param name
	 * @param about
	 * @param date
	 */
	public Event(String name, String about, String date) {
		this.name = name;
		this.about = about;
		this.date = date;
	}

	/**
	 * This function sets the Id of the event
	 * @param id the id of the event
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * This function gets the Id of the event
	 * @return id
	 */
	public int getId() {
		return id;
	}

	/**
	 * This function sets the name of the event
	 * @param name the name of the event
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * This function gets the name of the event
	 * @return name
	 */
	public String getName() {
		return name;
	}

	/**
	 * This function sets the about text for the event
	 * @param about the about text
	 */
	public void setAbout(String about) {
		this.about = about;
	}

	/**
	 * This function gets the about text for the event
	 * @return about
	 */
	public String getAbout() {
		return about;
	}

	/**
	 * This function sets the date of the event
	 * @param date
	 */
	public void setDate(String date) {
		this.date = date;
	}

	/**
	 * This function returns the date of the event
	 * @return date
	 */
	public String getDate() {
		return date;
	}

	/**
	 * This function returns the classes
	 * @return classes
	 */
	public Set<Class> getClasses() {
		return classes;
	}

	/**
	 * This function adds a class to an event
	 */
	public void addClass(Class eventClass) {
		classes.add(eventClass);
	}

	/**
	 * This function removes a class from an event
	 */
	public boolean removeClass(Class eventClass) {
		return classes.remove(eventClass);
	}
}

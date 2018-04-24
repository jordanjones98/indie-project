package com.houndshobbies.registration.entity;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "Class")
@Table(name = "classes")
public class Class {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="native")
	@GenericGenerator(name = "native", strategy = "native")
	private int id;

	@Column(name = "class_name")
	private String className;

	@Column(name = "slug")
    private String slug;

	@ManyToMany(mappedBy = "classes")
	private Set<Event> events = new HashSet<>();

	public Class() {

	}

    /**
     * This is a constructor that creates a new class
     * @param id the id of the class
     * @param className the name of the class
     * @param slug the slug of the class
     */
	public Class(int id, String className, String slug) {
		this.id = id;
		this.className = className;
        this.slug = slug;
	}

	/**
	 * This function sets the id
	 * @param id the Id of the class
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * This function returns the Id of the class
	 * @return id
	 */
	public int getId() {
		return id;
	}

	/**
	 * This function sets the name of the class
	 * @param className the name of the class
	 */
	public void setClassName(String className) {
		this.className = className;
	}

	/**
	 * This function returns the name of the class
	 * @return className
	 */
	public String getClassName() {
		return className;
	}

    /**
     * This function sets the slug for the class
     * @param slug the slug of the class
     */
    public void setSlug(String slug) {
        this.slug = slug;
    }

    /**
     * This function returns the slug of the class
     * @return slug
     */
    public String getSlug() {
        return slug;
    }
}

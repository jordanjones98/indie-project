package com.houndshobbies.registration.entity;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity(name = "Class")
@Table(name = "classes")
public class Class {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator="native")
	@GenericGenerator(name = "native", strategy = "native")
	private int id;

	@Column(name = "class_name")
	private String className;

	public Class(int id, String className) {
		this.id = id;
		this.className = className;
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
}

package com.houndshobbies.registration.interfaces;

import java.util.List;
import com.houndshobbies.registration.entity.Class;

/**
 * This interface is implemented by all controllers.
 */
public interface Controller<T> {
	T getBySlug(String slug);
	List<T> getAll();
	int insert(T entity);
	void update(T entity);
	void delete(T entity);
}

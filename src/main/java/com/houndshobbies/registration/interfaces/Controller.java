package com.houndshobbies.registration.interfaces;

import java.util.List;

public interface Controller<T> {
	T getBySlug(String slug);
}

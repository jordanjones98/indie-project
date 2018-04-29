package com.houndshobbies.registration.persistence;


import java.io.Serializable;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.Session;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Expression;
import org.hibernate.Transaction;

public class GenDao<T> {

	private Class<T> type;
    private final Logger logger = LogManager.getLogger(this.getClass());
    SessionFactory sessionFactory = SessionFactoryProvider
            .getSessionFactory();

	/**
	 * Constructor that takes a class, and sets it to type
	 * @param type the type of class
	 */
	public GenDao(Class<T> type) {
		this.type = type;
	}

	/**
	 * This function gets by the Id
	 * @param id the Id of the row on the entity
	 * @return entity the entity of the object
	 */
	public <T> T getById(int id) {
		Session session = sessionFactory.openSession();
		T entity = (T)session.get(type, id);
		session.close();
		return entity;
	}

	/**
	 * This function deletes by an entity
	 * @param entity the entity to delete
	 */
	public void delete(T entity) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		session.delete(entity);
		transaction.commit();
		session.close();
	}

    /**
     * This function gets all of the lines in the entity by calling the execute
     * query function.
     * @return a list of users
     */
    public List<T> getAll() {
        Session session = sessionFactory.openSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<T> query = builder.createQuery(type);
        Root<T> root = query.from(type);
        List<T> list = session.createQuery(query).getResultList();
        session.close();

        return list;
    }

    /**
	 * This function gets by a column, and searches by a term.
     * @return a list of users
     */
    public List<T> getByColumn(String column, String term) {
        Session session = sessionFactory.openSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<T> query = builder.createQuery(type);
        Root<T> root = query.from(type);
        Expression<String> propertyPath = root.get(column);
        query.where(builder.like(propertyPath, "%" + term + "%"));
        List<T> list = session.createQuery(query).getResultList();
        session.close();

        return list;
    }

	/**
	 * This function gets the entity by the slug.
	 * @param slug the slug of the entity
	 * @return the entity
	 */
	public T getBySlug(String slug) {
        Session session = sessionFactory.openSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<T> query = builder.createQuery(type);
        Root<T> root = query.from(type);
        Expression<String> propertyPath = root.get("slug");
        query.where(builder.like(propertyPath, slug));
        List<T> list = session.createQuery(query).getResultList();
        session.close();

        return list.get(0);
	}

	/**
	 * This function inserts an entity into the database
	 * @param entity the entity to insert
	 * @return int id the id of the inserted entity
	 */
	public int insert(T entity) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		int id = (int)session.save(entity);
		transaction.commit();
		session.close();
		return id;
	}

	/**
	 * This function saves or update the given entity
	 * @param entity the entity to save or update
	 */
	public void saveOrUpdate(T entity) {
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		session.saveOrUpdate(entity);
		transaction.commit();
		session.close();
	}

}

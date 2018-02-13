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

public class GenDao<T> {

	private Class<T> type;
    private final Logger logger = LogManager.getLogger(this.getClass());
    SessionFactory sessionFactory = SessionFactoryProvider
            .getSessionFactory();

	public GenDao(Class<T> type) {
		this.type = type;
	}

    /**
     * This function gets all of the users by calling the execute
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
     * This function gets all of the users by calling the execute
     * query function.
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

}

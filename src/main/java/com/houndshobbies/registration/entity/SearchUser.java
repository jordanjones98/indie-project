package com.houndshobbies.registration.entity;

public class SearchUser {
    private String email;

    private String fullName;

    private String firstName;

    private String lastName;

    public SearchUser() {
    }

    /**
     * This is a constructor that makes a new SearchUser entity
     * @param email the email of the user to serach / create
     * @param fullName the full name of the user to search / create
     */
    public SearchUser(String email, String fullName) {
        this.email = email;
        this.fullName = fullName;
    }

    /**
     * This function returns the email of the searched user.
     * @return email the email of the user
     */
    public String getEmail() {
        return email;
    }

    /**
     * This function sets the email of the user.
     * @param email the email of the user
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * This function gets the first name of the user, if the first name is null,
     * then it parses the full name into first and last names.
     * @return firstName the first name of the user
     */
    public String getFirstName() {
        if(firstName == null) {
            parseFirstLastName();
        }
        return firstName;
    }

    /**
     * This function gets the last name of the user, if the last name is null,
     * then it parses the full name into first and last names.
     * @return lastName the last name of the user
     */
    public String getLastName() {
        if(lastName == null) {
            parseFirstLastName();
        }
        return lastName;
    }

    /**
     * This function gets the fullName of the user, the full name is the first,
     * and last name concatenated.
     * @return fullName the full name of the user
     */
    public String getFullName() {
        return fullName;
    }

    /**
     * This funcion parses the full name into first, and last names then it puts
     * each variable into it's respective variable.
     */
    public void parseFirstLastName() {
        String[] splitName = fullName.split("\\s+");
        firstName = splitName[0];
        lastName = splitName[1];
    }
}

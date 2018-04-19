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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        if(firstName == null) {
            parseFirstLastName();
        }
        return firstName;
    }

    public String getLastName() {
        if(lastName == null) {
            parseFirstLastName();
        }
        return lastName;
    }

    public String getFullName() {
        return fullName;
    }

    public void parseFirstLastName() {
        String[] splitName = fullName.split("\\s+");
        firstName = splitName[0];
        lastName = splitName[1];
    }
}

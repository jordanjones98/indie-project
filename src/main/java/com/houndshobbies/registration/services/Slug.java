package com.houndshobbies.registration.services;

import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.Locale;
import java.text.Normalizer;
import java.text.Normalizer.Form;

public class Slug {
    static final Pattern NONLATIN = Pattern.compile("[^\\w_-]");
    private static final Pattern SEPARATORS = Pattern.compile("[\\s\\p{Punct}&&[^-]]");

    public String slugify(String input) {
        String noseparators = SEPARATORS.matcher(input).replaceAll("-");
        String normalized = Normalizer.normalize(noseparators, Form.NFD);
        String slug = NONLATIN.matcher(normalized).replaceAll("");
        return slug.toLowerCase(Locale.ENGLISH).replaceAll("-{2,}","-").replaceAll("^-|-$","");
    }




}

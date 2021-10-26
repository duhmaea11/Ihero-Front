package com.ihero.Domain;

import org.springframework.data.annotation.Id;

import java.util.Iterator;

public class HeroRegistration{
    @Id
    public String id;
    public String name;
    public String ranking;

    public HeroRegistration(String id, String name, String ranking) {
        this.id = id;
        this.name = name;
        this.ranking = ranking;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRanking() {
        return ranking;
    }

    public void setRanking(String ranking) {
        this.ranking = ranking;
    }

    @Override
    public String toString() {
        return "HeroRegistration{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", ranking='" + ranking + '\'' +
                '}';
    }
}

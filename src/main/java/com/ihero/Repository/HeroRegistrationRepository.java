package com.ihero.Repository;

import com.ihero.Domain.HeroRegistration;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HeroRegistrationRepository extends MongoRepository<HeroRegistration,String > {
    public Iterable<HeroRegistration> findAllById(String heroId);
}
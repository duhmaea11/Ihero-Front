package com.ihero.Service;

import com.ihero.Domain.HeroRegistration;
import com.ihero.Repository.HeroRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class HeroRegistrationService {
    @Autowired
    private final HeroRegistrationRepository heroRegistrationRepository;

    public HeroRegistrationService(HeroRegistrationRepository heroRegistrationRepository) {
        this.heroRegistrationRepository = heroRegistrationRepository;
    }

    public List<HeroRegistration> getHero() {
    return heroRegistrationRepository.findAll();
    }

    public HeroRegistration addNewHero(HeroRegistration heroRegistration) {
        return heroRegistrationRepository.save(heroRegistration);
    }


    public HeroRegistration updateNewHero(HeroRegistration heroRegistration) {
        return heroRegistrationRepository.save(heroRegistration);
    }

    public void removeHero(String heroId) {
        heroRegistrationRepository.deleteById(heroId);
    }

    public Iterable<HeroRegistration> getHeroById(String heroId){
        return heroRegistrationRepository.findAllById(heroId);
    }
}

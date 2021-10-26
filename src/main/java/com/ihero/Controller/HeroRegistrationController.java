package com.ihero.Controller;

import com.ihero.Domain.HeroRegistration;
import com.ihero.Service.HeroRegistrationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class HeroRegistrationController {
    private final HeroRegistrationService heroRegistrationService;

    public HeroRegistrationController(HeroRegistrationService heroRegistrationService) {
        this.heroRegistrationService = heroRegistrationService;
    }

    @GetMapping("/heroregistration")
    public List<HeroRegistration> getHero() {
        return heroRegistrationService.getHero();
    }

    @PostMapping("/heroregistration")
    public HeroRegistration addNewHero(@RequestBody HeroRegistration heroRegistration) {
        return heroRegistrationService.addNewHero(heroRegistration);
    }

    @GetMapping("/heroregistration/{heroId}")
    public Iterable<HeroRegistration> getHeroById(@PathVariable String heroId){
       return heroRegistrationService.getHeroById(heroId);
    }

    @DeleteMapping("/heroregistration/{heroId}")
    public void removeHero(@PathVariable String heroId) {
        heroRegistrationService.removeHero(heroId);
    }

    @PutMapping("heroregistration")
    public HeroRegistration updateNewHero(@RequestBody HeroRegistration heroRegistration) {
        return heroRegistrationService.updateNewHero(heroRegistration);
    }
}

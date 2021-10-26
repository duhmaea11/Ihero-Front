import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ranking } from 'src/app/constants/ranking.contant';
import { HeroInterface } from 'src/app/interface/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'hero-registration.component',
  templateUrl: 'hero-registration.component.html',
  styleUrls: ['hero-registration.component.scss'],
})
 
export class HeroRegistrationComponent implements OnInit {
  public hero: HeroInterface = {} as HeroInterface;
  public isNew: boolean = true;
  public heroId: string = '';
  public rankingL: string[] = ranking

  constructor(
    private router: Router,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.heroId = id || '';

    if (id) this.getHero();
  }

  backToList() {
    this.router.navigate(['/hero']);
  }

  async getHero() {
    try {
      this.isNew = false;

      const response = await this.heroService.getHeroById(this.heroId);
      this.hero = response[0]
    } catch (error) {
      console.error(error);
    }
  }

  save() {
    if (this.isNew) this.createHero();
    else this.updateHero();
  }

  async createHero() {
    try {
      await this.heroService.createHero(this.hero);
      this.backToList();
    } catch (error) {
      console.error(error);
    }
  }

  async updateHero() {
    try {
      await this.heroService.updateHero(this.hero);
      this.backToList();
    } catch (error) {
      console.error(error);
    }
  }
}

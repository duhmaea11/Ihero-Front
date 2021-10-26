import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeroInterface } from '../interface/hero.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor(private httpClient: HttpClient) { }
  public pathName = 'heroregistration'
  getHero() {
    return this.httpClient.get<HeroInterface[]>(`${environment.api_url}/${this.pathName}`).toPromise()
  }

  getHeroById(id: string) {
    return this.httpClient.get<HeroInterface[]>(`${environment.api_url}/${this.pathName}/${id}`).toPromise()
  }

  removeHero(id: string) {
    return this.httpClient.delete(`${environment.api_url}/${this.pathName}/${id}`).toPromise()
  }

  createHero(hero: HeroInterface) {
    return this.httpClient.post(`${environment.api_url}/${this.pathName}`, hero).toPromise()
  }

  updateHero(hero: HeroInterface) {
    return this.httpClient.put(`${environment.api_url}/${this.pathName}`, hero).toPromise()
  }
}
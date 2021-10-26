import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { filterListPagination } from 'src/app/helpers/paginatior.helper';
import { HeroInterface } from 'src/app/interface/hero.interface';
import { PaginatorInterface } from 'src/app/interface/paginator.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public pagination: PaginatorInterface = {} as PaginatorInterface;
  public heroL: HeroInterface[] = [];

  public filterText: string = '';
  public icon = { faTrash, faPencilAlt };

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  get filteredHero() {
    const { page, pageSize } = this.pagination;
    const paginationList = filterListPagination(this.heroL, page, pageSize);

    if (!this.filterText) return paginationList;
    else
      return this.heroL.filter(({ name }) =>
        name.toLowerCase().includes(this.filterText.toLowerCase())
      );
  }

  ngOnInit() {
    this.getHero();
  }

  async getHero() {
    const response = await this.heroService.getHero()
    this.heroL = response;

    this.pagination = {
      page: 1,
      pageSize: 5,
      collectionSize: this.heroL.length,
    };
  }

  goToRegister() {
    this.router.navigate(['/hero-registration'] );
  }

  goToEdit(id: string) {
    this.router.navigate([`/hero-registration/${id}`] );
  }

  async removeHero(id: string, index: number) {
    await this.heroService.removeHero(id)
    this.heroL.splice(index, 1)
  }
}

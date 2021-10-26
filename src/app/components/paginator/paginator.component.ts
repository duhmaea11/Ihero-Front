import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginatorInterface } from 'src/app/interface/paginator.interface';

import {
  faAngleRight,
  faAngleLeft,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Output() pageChange = new EventEmitter();
  @Input() paginationConfig: PaginatorInterface = {} as PaginatorInterface;

  public icon = {
      angleLeft: faAngleLeft,
      angleRight: faAngleRight,
      stepForward: faStepForward,
      stepBackward: faStepBackward,
  };

  public itemsPerPage = [5, 10, 15, 20];

  constructor() {}

  ngOnInit(): void {}

  get linesPerPage() {
    const { collectionSize, pageSize, page } = this.paginationConfig;

    const final = page * pageSize;
    const initial = (page - 1) * pageSize;

    const fieldsLength = collectionSize;

    return `${!initial ? 1 : initial} - ${
      final > fieldsLength ? fieldsLength : final
    }`;
  }

  get totalPages() {
    const { collectionSize, pageSize } = this.paginationConfig;
    return Math.ceil(collectionSize / pageSize);
  }

  onPangeChange() {
    this.pageChange.emit(this.paginationConfig);
  }

  prevAll() {
    this.paginationConfig.page = 1;
    this.onPangeChange();
  }

  prevPage() {
    if (!(this.paginationConfig.page - 1)) return;
    this.paginationConfig.page--;
    this.onPangeChange();
  }

  nextPage() {
    if (this.paginationConfig.page === this.totalPages) return;
    this.paginationConfig.page++;
    this.onPangeChange();
  }

  nextAll() {
    this.paginationConfig.page = this.totalPages;
    this.onPangeChange();
  }
}

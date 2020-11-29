import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../common/services/northwind.service';

import { State } from '@progress/kendo-data-query';

import {
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 2
  };

  constructor(private service: CategoriesService) {
    this.view = service;
    this.service.query(this.state);
  }

  ngOnInit(): void {
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    console.log(state);
    this.state = state;
    // this.service.query(state);
  }

}

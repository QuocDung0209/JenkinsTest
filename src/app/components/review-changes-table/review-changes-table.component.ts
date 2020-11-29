import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {get} from 'lodash';

@Component({
  selector: 'review-changes-table',
  templateUrl: './review-changes-table.component.html',
  styleUrls: ['./review-changes-table.component.scss']
})
export class ReviewChangesTableComponent implements OnInit {

  @Input('headerTitles') headerTitles: string[] = ['Fields', 'Current value', 'New value'];
  @Output('rowClicked') rowClicked = new EventEmitter<string>();
  private _currentValues: object = {};
  private _newValues: object = {};
  gridData: any = [];

  constructor() {

  }

  ngOnInit(): void {
    if (this.headerTitles.length < 3) {
      throw "headerTitles only receive 3 elements!";
    }

    for(const property in this.currentValues) {
      this.gridData.push({field: property, current: this.currentValues[property], new: this.newValues[property]});
    }
  }

  @Input('currentValues')
  get currentValues() {
    return this._currentValues;
  }
  set currentValues(data: object) {
    if(data) {
      this._currentValues = data;
    }
  }

  @Input('newValues')
  get newValues() {
    return this._newValues;
  }
  set newValues(data: object) {
    if(data) {
      this._newValues = data;
    }
  }

  onRowClick(e) {
    this.rowClicked.emit(get(e, 'target.parentNode.innerText'));
  }
}

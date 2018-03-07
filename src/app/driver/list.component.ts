import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tour, Driver } from '../shared/interfaces';
import * as _ from 'lodash';


@Component({
    selector: 'fm-drivers-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less'],
})
export class DriversListComponent implements OnInit {

  @Output() edit = new EventEmitter<Tour>();

  drivers: Driver[] = [
    { id: 1, name: 'Driver 1', selected: false },
    { id: 2, name: 'Driver 2', selected: false },
    { id: 3, name: 'Driver 3', selected: false },
    { id: 4, name: 'Driver 4', selected: false },
    { id: 5, name: 'Driver 5', selected: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}

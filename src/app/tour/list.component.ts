import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tour } from '../shared/interfaces';
import * as _ from 'lodash';


@Component({
    selector: 'fm-tours-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less'],
})
export class ToursListComponent implements OnInit {

  @Output() edit = new EventEmitter<Tour>();
  @Output() dispatch = new EventEmitter<Tour>();

  tours: Tour[] = [
    { id: 1, name: 'Tour of Oslo City', waypoints: [ {id: 1, lat: 51.673858, lng: 7.815982, label: 'A', name: 'Big Park 1', selected: true }, {id: 2, lat: 51.373858, lng: 7.215982, label: 'B', name: 'Cadet School', selected: true }, {id: 3, lat: 51.723858, lng: 7.895982, label: 'C', name: 'City Hospital', selected: true } ] },
    { id: 2, name: 'Short City Tour - Oslo', waypoints: [ {id: 1, lat: 51.673858, lng: 7.815982, label: 'A', name: 'Big Park 1', selected: true }, {id: 3, lat: 51.723858, lng: 7.895982, label: 'C', name: 'City Hospital', selected: true }] },
    { id: 3, name: 'City Tour - Bergen', waypoints: [ {id: 2, lat: 51.373858, lng: 7.215982, label: 'B', name: 'Cadet School', selected: true }, {id: 3, lat: 51.723858, lng: 7.895982, label: 'C', name: 'City Hospital', selected: true }] },
    { id: 4, name: 'Trondheim City Tour', waypoints: [ {id: 1, lat: 51.673858, lng: 7.815982, label: 'A', name: 'Big Park 1', selected: true } ] }
  ];

  constructor() { }

  ngOnInit() {
  }

  doEdit(tour) {
    console.log(tour);
    this.edit.emit(tour);
  }

  doDelete(tour) {
    console.log(tour);
    _.remove(this.tours, function(_tour) {
      return _tour.id === tour.id;
    });
  }

  doDispatch(tour) {
    this.dispatch.emit(tour);
  }

}

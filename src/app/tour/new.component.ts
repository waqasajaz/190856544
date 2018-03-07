import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Waypoint, Tour } from '../shared/interfaces';

@Component({
    selector: 'fm-tour-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.less'],
})
export class NewTourComponent implements OnInit {

  lat: Number = 51.678418;
  lng: Number = 7.809007;
  markers: Waypoint[] = [];
  private _tour: Tour;
  tourName: String = '';
  waypoints: Waypoint[] = [];

  @Input() set tour(value: Tour) {
    if (value) {
      this._tour = value;
    } else {
      this._tour = {id: undefined, name: '', waypoints: []};
    }
    console.log(this._tour);
  }

  @Output() saved = new EventEmitter<Tour>();

  constructor() { }

  ngOnInit() {
    this.waypoints = [
      {id: 1, lat: 51.673858, lng: 7.815982, label: 'A', name: 'Big Park 1', selected: false},
      {id: 2, lat: 51.373858, lng: 7.215982, label: 'B', name: 'Cadet School', selected: false},
      {id: 3, lat: 51.723858, lng: 7.895982, label: 'C', name: 'City Hospital', selected: false}
    ];
    console.log(this._tour);
    this.setFormAndMap();
  }

  setFormAndMap() {
    if (this._tour.waypoints) {
      this.markers = [];
      this._tour.waypoints.forEach(waypoint => {
        this.wayPointSelected(waypoint);
      });
      this.tourName = this._tour.name;
    }

  }

  removeMarker(index) {
    console.log(index);
    this.markers.splice(index, 1);
  }

  clickedMarker(label, i) {
    console.log(label, i);
  }

  wayPointSelected(waypoint) {
    console.log(waypoint);
    if (waypoint.selected) {
      this.markers.push(waypoint);
    } else {
      this.markers.forEach((wp, index) => {
        if (wp.id === waypoint.id) {
          this.markers.splice(index, 1);
        }
      });
    }
  }

  saveTour() {
    const tour: Tour = {
      id: Math.floor(Math.random() * 100),
      name: this.tourName,
      waypoints: this.markers
    };
    this.saved.emit(tour);
  }

}



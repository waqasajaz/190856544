import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Waypoint, Tour } from '../shared/interfaces';

@Component({
    selector: 'fm-driver-dispatch',
    templateUrl: './dispatch.component.html',
    styleUrls: ['./dispatch.component.less'],
})
export class DriverDispatchComponent implements OnInit {

  lat: Number = 51.678418;
  lng: Number = 7.809007;
  markers: Waypoint[] = [];
  private _tour: Tour;
  tourName: String = '';

  @Input() set tour(value: Tour) {
    this._tour = value;
    console.log(this._tour);
  }

  @Output() saved = new EventEmitter<Tour>();

  constructor() { }

  ngOnInit() {
    console.log(this._tour);
    this.setFormAndMap();
  }

  setFormAndMap() {
    if (this._tour) {
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



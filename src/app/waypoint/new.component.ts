import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Waypoint } from '../shared/interfaces';

@Component({
    selector: 'fm-waypoint-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.less'],
})
export class NewWaypointComponent implements OnInit {

  lat: Number = 59.84956;
  lng: Number = 10.75334;
  selectedLat: Number;
  selectedLng: Number;
  waypointName: String;

  @Output() saved = new EventEmitter<Waypoint>();

  constructor() { }

  ngOnInit() {
  }

  locationSelected($event) {
    console.log($event);
    this.selectedLat = $event.coords.lat;
    this.selectedLng = $event.coords.lng;
  }

  saveWaypoint() {
    console.log(this.selectedLat, this.selectedLat, this.waypointName);
    const waypoint: Waypoint = {
      id: Math.floor(Math.random() * 100),
      lat: this.selectedLat,
      lng: this.selectedLng,
      label: 'D',
      name: this.waypointName,
      selected: false
    };
    console.log(waypoint);
    this.saved.emit(waypoint);
  }
}


import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Waypoint } from '../shared/interfaces';
import * as _ from 'lodash';

@Component({
    selector: 'fm-waypoints-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less'],
})
export class WaypointsListComponent implements OnInit {
  _selectedable: Boolean = false;
  _selected: Waypoint[] = [];
  _waypoints: Waypoint[] = [];
  _options: Boolean = true;
  @Output() itemSelected = new EventEmitter<Waypoint>();
  @Output() dispatch = new EventEmitter<Waypoint>();
  @Input() set selectedable(value: Boolean) {
    this._selectedable = value;
  }
  @Input() set selected(values: Waypoint[]) {
    this._selected = values;
  }

  @Input() set waypoints(values: Waypoint[]) {
    this._waypoints = values;
  }

  @Input() set options(value: Boolean) {
    this._options = value;
    console.log(this._options);
  }

  constructor() { }

  ngOnInit() {
    this.checkWaypointsSelection();
  }

  // mark waypoints as selected if selection list is available
  checkWaypointsSelection() {
    this._waypoints.forEach(waypoint => {
      const foundItems = this._selected.filter(sl => sl.id === waypoint.id);
      waypoint.selected = foundItems && foundItems.length ? true : false;
    });
  }

  doDelete(waypoint) {
    console.log(waypoint);
    _.remove(this._waypoints, function(_waypoint) {
      return _waypoint.id === waypoint.id;
    });
  }

  itemClicked(waypoint) {
    if (this._selectedable) {
      if (waypoint.selected) {
        waypoint.selected = false;
      } else {
        waypoint.selected = true;
      }
      this.itemSelected.emit(waypoint);
    }
  }

  doDispatch(tour) {
    this.dispatch.emit(tour);
  }


}

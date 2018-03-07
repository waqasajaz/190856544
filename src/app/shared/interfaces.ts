// just an interface for type safety.
export interface Waypoint {
  id: Number;
  lat: Number;
  lng: Number;
  label: String;
  name?: String;
  selected: Boolean;
}


export interface Tour {
  id: Number;
  name: String;
  waypoints: Waypoint[];
}

export interface Driver {
  id: Number;
  name: String;
  selected: Boolean;
}

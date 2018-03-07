import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Waypoint } from '../shared/interfaces';

@Component({
    selector: 'fm-waypoints-dashboard',
    templateUrl: './dashboard.component.html'
})
export class WaypointsDashboardComponent implements OnInit {
  closeResult: string;
  private activeModal: NgbModalRef;
  @ViewChild('dispatchTourDlg') dispatchTourDlg: ElementRef;

  waypoints: Waypoint[] = [];

  ngOnInit() {
    this.waypoints = [
      {id: 1, lat: 51.673858, lng: 7.815982, label: 'A', name: 'Big Park 1', selected: false},
      {id: 2, lat: 51.373858, lng: 7.215982, label: 'B', name: 'Cadet School', selected: false},
      {id: 3, lat: 51.723858, lng: 7.895982, label: 'C', name: 'City Hospital', selected: false}
    ];
  }

  constructor(
    private modalService: NgbModal
  ) {}


  openAddNewDlg(content) {
    this.activeModal = this.modalService.open(content);
    this.activeModal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  waypointSave(waypoint: Waypoint) {
    console.log(waypoint);
    this.activeModal.close();
    this.waypoints.push(waypoint);
  }

  dispatchDriver(tour) {
    this.openAddNewDlg(this.dispatchTourDlg);
  }


}

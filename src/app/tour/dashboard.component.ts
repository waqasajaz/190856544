import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Tour, Waypoint } from '../shared/interfaces';

@Component({
    selector: 'fm-tours-dashboard',
    templateUrl: './dashboard.component.html'
})
export class ToursDashboardComponent implements OnInit {
  closeResult: string;
  private _tourToEdit: Tour;
  @ViewChild('newTour') newTour: ElementRef;
  @ViewChild('dispatchTourDlg') dispatchTourDlg: ElementRef;
  private activeModal: NgbModalRef;

  ngOnInit() {
  }

  constructor(private modalService: NgbModal) {}


  openAddNewDlg(content) {
    this.activeModal = this.modalService.open(content, { size: 'lg' });
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

  editTour(tour) {
    console.log(tour);
    this._tourToEdit = tour;
    this.openAddNewDlg(this.newTour);
  }

  tourSaved(tour) {
    this.activeModal.close();
    console.log(tour);
  }

  dispatchDriver(tour) {
    this.openAddNewDlg(this.dispatchTourDlg);
  }

}

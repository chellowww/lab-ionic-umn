import { Component, OnInit } from '@angular/core';
import { Bookings } from './bookings.model';
import { BookingsService } from './bookings.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
booking: Bookings[];
  constructor(private svc : BookingsService) { }

  ngOnInit() {
    this.booking = this.svc.getAllBooking();
  }


  deleteBook(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.svc.deleteBooking(id);
    this.booking = this.svc.getAllBooking();
  }
}

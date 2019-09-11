import { Injectable } from '@angular/core';
import { Bookings } from './bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private booking: Bookings[] = [
    {
      id: '1',
      placeId:'ee' ,
      userId: 'ee',
      placeTitle : '2e2e' ,
      guestNumber: 11 
    },
    {
      id: '2',
      placeId:'eae' ,
      userId: 'eea',
      placeTitle : 'aaaa2e2e' ,
      guestNumber: 1
    }
  ]
  constructor() { }

  getAllBooking(){
    return [...this.booking];
  }

  getBooking(recipeId: string){
    return {
      ...this.booking.find(booking =>{
        return booking.id === recipeId;
      })
    }
  }

  deleteBooking(bookId:string){
    this.booking = this.booking.filter(booking => {
      console.log("bookId = " + bookId);
      console.log("booking.id = " + booking.id);
      return booking.id !== bookId;
    });
  }
}

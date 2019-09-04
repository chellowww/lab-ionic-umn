import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces : Place[] = [];
  constructor( private placeSrvc : PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeSrvc.getAllPlaces();
  }

}

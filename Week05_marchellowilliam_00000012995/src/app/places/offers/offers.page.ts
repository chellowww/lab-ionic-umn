import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/places.service';
import { Place } from '../places.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces : Place[] = [];
  constructor( private placeSrvc : PlacesService, private router: Router) { }

  ngOnInit() {
    this.loadedPlaces = this.placeSrvc.getAllPlaces();
  }
  editOffer(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
    }

}

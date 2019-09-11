import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PlacesService } from 'src/app/places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces : Place[] = [];
  constructor(private menuCtrl: MenuController, private placeSrvc : PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeSrvc.getAllPlaces();
  }

  onOpenMenu(){
    this.menuCtrl.toggle('m1');
  }

}

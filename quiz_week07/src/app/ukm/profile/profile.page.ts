import { Component, OnInit } from '@angular/core';
import { Ukm } from '../ukm.model';
import { UkmService } from '../ukm.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadedukm: Ukm[];

  constructor(private ukmService: UkmService) { }

  ngOnInit() {
    this.loadedukm = this.ukmService.getLoadedUkm();
  }

  ionViewWillEnter(){
    this.loadedukm = this.ukmService.getLoadedUkm();
  }

 

  onCancel(id: string){
    this.ukmService.removeFromMyukm(id);
    this.loadedukm = this.ukmService.getLoadedUkm();
  }

}

import { Component, OnInit } from '@angular/core';
import { Ukm } from '../ukm.model';
import { UkmService } from '../ukm.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedUkm: Ukm[];
  constructor(private ukmServices: UkmService, private alertController: AlertController) { }

  async presentAlertMultipleButtons(ukm: Ukm) {
    const alert = await this.alertController.create({
      header: 'Bener mau Join?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
      },
      {
        text: 'Serius',
        handler: () => {
          this.ukmServices.add(ukm);
        } 
      }]
    });

    await alert.present();
  }

  ngOnInit() {
    this.loadedUkm = this.ukmServices.getukm();
  }

  save(ukm: Ukm){
    this.presentAlertMultipleButtons(ukm);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from 'src/app/places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../places.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place:Place;

 
  constructor(
    private router:Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placeSvc: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController) { }
  

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      this.place = this.placeSvc.getPlace(paramMap.get('placeId'));
    })
  }

  async onBookPlace() {
      const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [{
      text: 'Book w/ Random Date',
      handler: () => {
      this.modalCtrl.create({ component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place } })
      .then(modalElement => {
      modalElement.present();
      return modalElement.onDidDismiss();
      })
      .then(resultData => {
      console.log(resultData);
      });
      }
      }, {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
      console.log('Cancel clicked');
      }
      }]
      });
      await actionSheet.present();
    }

  // onBookPlace(){
  //   this.modalCtrl
  //   .create({component: CreateBookingComponent,
  //   componentProps: {selectedPlace: this.place}
  // })
  // .then(modalEl=>{
  //   modalEl.present();
  //   return modalEl.onDidDismiss();
  // })
  // .then(resultData =>{
  //   console.log(resultData.data, resultData.role);
  //   if(resultData.role === 'confirm'){
  //     console.log('Booked');
  //   }
  // });
  // }

}

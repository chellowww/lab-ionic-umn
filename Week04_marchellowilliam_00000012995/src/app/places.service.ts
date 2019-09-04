import { Injectable } from '@angular/core';
import { Place } from './places/places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private places: Place[] = [
  new Place(
    'p1',
    'Serpong M-Town',
    '2BR apartment near SMS',
    'https://www.99.co/blog/indonesia/wp-content/uploads/2019/01/summarecon-bekasi-cover.jpg',
    8000000
    ),
    new Place(
      'p2',
      'Scientia Boulevard',
      'Near UMN',
      'https://s4.rea.global/img/668x501-resize/rumah/id/d9295d169ff9da3e418d044ad7376318.jpg',
      100000
    ),
]
  constructor() { }
  getAllPlaces(){
    return[...this.places];
  }
}

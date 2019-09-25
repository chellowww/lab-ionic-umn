import { Injectable } from '@angular/core';
import { Ukm } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmService {

  loadedukm: Ukm[] = [];
  _ukm: Ukm[] = [
    new Ukm(
      'p1',
      'Basket',
      'kjdfjksf',
      
    ),
    new Ukm(
      'p2',
      'Futsal',
      'ewkjnfkw'
    ),
    new Ukm(
      'p3',
      'Jcafe',
      'jdsfj'
     
    ),
    new Ukm(
      'p4',
      'UMNPC',
      'jdsfj'
     
    ),
    new Ukm(
      'p5',
      'Taekwondo',
      'jdsfj'
     
    ),
  ];
  constructor() { }

  getukm() {
    console.log(...this._ukm);
    return [...this._ukm];
  }
  getUkm(id: string){
    return {...this._ukm.find(p => p.id === id)};
  }

  getLoadedUkm(){
    return[...this.loadedukm];
  }
  removeFromMyukm(id:string){
    this.loadedukm = this.loadedukm.filter(u => {
      return u.id !== id;
    });
  }
  add(ukm: Ukm){
    this.loadedukm.push(ukm);
  }
}

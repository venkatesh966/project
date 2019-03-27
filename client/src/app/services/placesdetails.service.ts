import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Http } from '@angular/http';

const url: string = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class PlacesdetailsService {

  constructor(private http:Http,) { }

  getData(){
    return  this.http.get('http://localhost:3000/api/places/').pipe((res) => res)
  }

  // addData(info){
  //   return  this.http.get('https://example.com/api/places').pipe(map(data => {})).subscribe(result => {
  //     console.log(result);
  //   });
  // }
}

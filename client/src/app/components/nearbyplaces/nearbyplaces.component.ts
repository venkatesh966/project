import { Component, OnInit } from '@angular/core';
import { PlacesdetailsService } from 'src/app/services/placesdetails.service';

@Component({
  selector: 'app-nearbyplaces',
  templateUrl: './nearbyplaces.component.html',
  styleUrls: ['./nearbyplaces.component.css']
})
export class NearbyplacesComponent implements OnInit {

  constructor(private placeService: PlacesdetailsService) { }

  public hospitalList: any;
  public distance = [];
  public displayFlag : boolean = false;
  public nearbyHospitals = []
  public userCoordinates = {
    latitude: "",
    longitude: ""
  }

  calculateDistance() {
    this.nearbyHospitals = []
    let userData = this.userCoordinates
    if(!userData.latitude || !userData.longitude)
    return;
    for(let i=0; i<this.hospitalList.length;i++) {
      let data = this.hospitalList[i].coordinates
      let distance = this.getDistanceFromLatLonInKm(userData.latitude,userData.longitude,data.lat, data.long);
      this.distance[i] = distance
      if(distance < 10) {
        this.nearbyHospitals.push(this.hospitalList[i])
      }
    }
    this.displayFlag = true
    console.log(this.distance)
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    if(lat1>lat2)
    var dLat = (lat1-lat2);  // deg2rad below
    else
    var dLat = (lat2-lat1)

    if(lon1>lon2)
    var dLon = (lon1-lon2);  // deg2rad below
    else
    var dLon = (lon2-lon1)

    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos((lat1)) * Math.cos((lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 
    return Math.floor(d/1000);
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  ngOnInit() {
    this.placeService.getData().subscribe((res) => {
      this.hospitalList = res.json();
      console.log(this.hospitalList)
    })
  }

}

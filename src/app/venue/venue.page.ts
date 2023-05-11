import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@capacitor/geolocation";
import { Browser } from "@capacitor/browser";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {
  
  long:number = 0;
  lat:number = 0;
  time:number = 0;

  constructor() { }

  ngOnInit() {
  }

  async getGPS(){
    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current position: ");

    this.time = coordinates.timestamp;
    this.long = coordinates.coords.longitude;
    this.lat = coordinates.coords.latitude;

  }

  async openBrowser() {
    await Browser.open({ url: 'https://www.google.com/maps/search/wedding+venue/@53.2737014,-9.3136773,10z/data=!3m1!4b1' });
    };

}

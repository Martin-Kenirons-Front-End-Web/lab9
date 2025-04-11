import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Geolocation} from '@capacitor/geolocation';  
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, 
    IonContent],
})
export class HomePage {
  location: any = "";
  lat:number = 0;
  long:number = 0;
  constructor() {}


  async getLocation(){
    console.log("Getting location...");
    this.location = await Geolocation.getCurrentPosition();
    this.lat = this.location.coords.latitude;
    this.long = this.location.coords.longitude;

  }

  openBrowser(){
    Browser.open({
      url: 'https://www.google.com/maps/search/?api=1&query=' + this.lat + ',' + this.long
    });
  }
}

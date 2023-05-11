import { Component, OnInit } from '@angular/core';

//added imports
import { CakeService } from "../services/cake.service";
import { Storage } from "@ionic/storage-angular";//plug in

@Component({
  selector: 'app-wedding-meal',
  templateUrl: './wedding-meal.page.html',
  styleUrls: ['./wedding-meal.page.scss'],
})

export class WeddingMealPage implements OnInit {

  //variables
  cakes:any[]=[];
  cakeMessage:any[]=[];
  rand:number = Math.floor(Math.random() * 6);//whole random number between 0-5 inclusive

  constructor(private cakeService:CakeService, private storage:Storage) { }

  ngOnInit() {
  }

  //method to get data from JSON blob API
  ionViewWillEnter(){
    this.cakeService.GetCakeData().subscribe(
      (data) => {
        this.cakes = data[this.rand];
        this.cakeMessage = data.message[this.rand];
      }
    );
  }

  //method to store cake img url and it's corrosponding message for the results page
  async onSave(){
    await this.storage.create();
    await this.storage.set("cake", this.cakes);
    await this.storage.set("cakeMessage", this.cakeMessage);
  }


}

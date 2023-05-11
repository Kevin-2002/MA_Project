import { Component, OnInit } from '@angular/core';
import { CakeService } from "../services/cake.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-wedding-meal',
  templateUrl: './wedding-meal.page.html',
  styleUrls: ['./wedding-meal.page.scss'],
})
export class WeddingMealPage implements OnInit {

  //var
  cakes:any[]=[];
  cakeMessage:any[]=[];
  rand:number = Math.floor(Math.random() * 6);

  constructor(private cakeService:CakeService, private storage:Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.cakeService.GetCakeData().subscribe(
      (data) => {
        this.cakes = data[this.rand];
        this.cakeMessage = data.message[this.rand];
      }
    );
  }

  async onSave(){
    await this.storage.create();
    await this.storage.set("cake", this.cakes);
    await this.storage.set("cakeMessage", this.cakeMessage);
  }


}

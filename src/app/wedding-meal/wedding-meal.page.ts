import { Component, OnInit } from '@angular/core';
import { CakeService } from "../services/cake.service";

@Component({
  selector: 'app-wedding-meal',
  templateUrl: './wedding-meal.page.html',
  styleUrls: ['./wedding-meal.page.scss'],
})
export class WeddingMealPage implements OnInit {

  //var
  cakes:any[]=[];
  cakeMessage:[]=[];
  rand:number = Math.floor(Math.random() * 7);

  constructor(private cakeService:CakeService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.cakeService.GetCakeData().subscribe(
      (data) => {
        this.cakes = data[this.rand];
      }
    );
  }



}

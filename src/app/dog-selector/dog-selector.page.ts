import { Component, OnInit } from '@angular/core';
import { DogService } from "../services/dog.service";

@Component({
  selector: 'app-dog-selector',
  templateUrl: './dog-selector.page.html',
  styleUrls: ['./dog-selector.page.scss'],
})
export class DogSelectorPage implements OnInit {

  dogs:any[]=[];
  constructor(private dogService:DogService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dogService.GetDogData().subscribe(
      (data) => {
        this.dogs = data["message"];
      }
    );
  }

}

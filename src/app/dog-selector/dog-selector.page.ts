import { Component, OnInit } from '@angular/core';

//added imports
import { DogService } from "../services/dog.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-dog-selector',
  templateUrl: './dog-selector.page.html',
  styleUrls: ['./dog-selector.page.scss'],
})
export class DogSelectorPage implements OnInit {
  //variables
  dogs:any[]=[];

  constructor(private dogService:DogService, private storage:Storage) { }

  //methods
  ngOnInit() {
  }

  //get information from the api used in dog.service.ts
  ionViewWillEnter(){
    this.dogService.GetDogData().subscribe(
      (data) => {
        //pass in the key message to get the corresponding src image data value
        this.dogs = data["message"];
      }
    );
  }

  //save the data gotten from the api to display in the results page
  async onSave(){
    await this.storage.create();
    await this.storage.set("dogs", this.dogs);
  }

}

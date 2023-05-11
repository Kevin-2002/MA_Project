import { Component, OnInit } from '@angular/core';
import { DogService } from "../services/dog.service";
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-dog-selector',
  templateUrl: './dog-selector.page.html',
  styleUrls: ['./dog-selector.page.scss'],
})
export class DogSelectorPage implements OnInit {

  dogs:any[]=[];
  constructor(private dogService:DogService, private storage:Storage) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dogService.GetDogData().subscribe(
      (data) => {
        this.dogs = data["message"];
      }
    );
  }

  async onSave(){
    await this.storage.create();
    await this.storage.set("dogs", this.dogs);
  }

}

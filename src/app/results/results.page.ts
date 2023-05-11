import { Component, OnInit } from '@angular/core';

//added import
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  //variables
  dog:any;
  cake:any;
  cakeMessage:any

  constructor(private storage:Storage) { }

  //methods
  ngOnInit() {
  }

  //method to get data saved from other pages that has been stored and store them into local variables
  async ionViewWillEnter(){
    await this.storage.create;
    this.dog = await this.storage.get('dogs');
    this.cake = await this.storage.get('cake');
    this.cakeMessage = await this.storage.get('cakeMessage');
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  dog:any;
  cake:any;
  cakeMessage:any
  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    await this.storage.create;
    this.dog = await this.storage.get('dogs');
    this.cake = await this.storage.get('cake');
    this.cakeMessage = await this.storage.get('cakeMessage');
  }
}

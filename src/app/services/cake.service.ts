import { Injectable } from '@angular/core';

//added imports
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CakeService {

  constructor(private http: HttpClient) { }

  //method to get JSON data and return it as an observable
  GetCakeData(): Observable<any> {
    return this.http.get('https://jsonblob.com/api/jsonBlob/1105925206085746688');
  }
}

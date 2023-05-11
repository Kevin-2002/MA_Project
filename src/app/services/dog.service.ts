import { Injectable } from '@angular/core';

//added imports
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  //method to get JSON data and return it as an observable
  GetDogData(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}

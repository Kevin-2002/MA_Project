import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http: HttpClient) { }

  GetCakeData(): Observable<any> {
    return this.http.get('https://jsonblob.com/api/jsonBlob/1105925206085746688');
  }
}

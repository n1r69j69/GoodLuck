import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public http: HttpClient) { }
  public getProducts():Observable<any>{
    return this.http.get(`${environment.SERVER_URL}/products.json`);
  }
}

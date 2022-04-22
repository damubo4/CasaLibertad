import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {

  URL = 'http://localhost:3000/recepcion/';

  constructor(private http:HttpClient) { }

  addRecepcion(recepcion): Observable<any> {    
    return this.http.post(this.URL, recepcion);
  }

  getRecepcion(id): Observable<any> {    
    return this.http.get(this.URL + id);
  }
}

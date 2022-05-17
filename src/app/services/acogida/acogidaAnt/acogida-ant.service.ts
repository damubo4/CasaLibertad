import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcogidaAntService {

  URL = 'URL'; 
  url_crimes = "http://localhost:3000/crimenes"

  constructor(private http:HttpClient) { }

  addAntecedentes(antecedente): Observable<any> {    
    var res = this.http.post(this.URL, antecedente);
    return res;    
  }

  getCrimes(): Observable<any>{
    return this.http.get(this.url_crimes);
  }

}


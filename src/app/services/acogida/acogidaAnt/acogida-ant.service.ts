import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcogidaAntService {

  URL = 'http://192.168.1.84:7001/user_records/records'; 
  url_crimes = "http://192.168.1.84:7001/user_records/crimes"

  constructor(private http:HttpClient) { }

  addAntecedentes(antecedente): Observable<any> {    
    var res = this.http.post(this.URL, antecedente);
    return res;    
  }

  getCrimes(): Observable<any>{
    return this.http.get(this.url_crimes);
  }

}


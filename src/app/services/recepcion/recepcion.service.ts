import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {

  URL = 'http://127.0.0.1:8080/api/reception/visitor';
  


  constructor(private http:HttpClient) { }
  
  addRecepcion(recepcion): Observable<any> {    
    var res = this.http.post(this.URL, recepcion);
    return res;    
  }

  getRecepcion(id,type): Observable<any> {    
    return this.http.get(this.URL +'?document_type_id='+type+'&'+'document_number='+id);
  }
  
  editRecepcion(id, recepcion): Observable<any> {   
    recepcion.user.document_type_id = 1;
    const finalURL = this.URL +'?document_type_id='+recepcion.user.document_type_id+'&'+'document_number='+id;
    return this.http.put(finalURL, recepcion);
  }
}


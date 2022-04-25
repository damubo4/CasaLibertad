import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepcionService {

  URL = 'http://localhost:8080/api/reception/visitor';


  constructor(private http:HttpClient) { }
  rececpcion2: `
  {
    "user": {
      "document_type_id": 1,
      "document_number": "12046789",
      "names_user": "Juan Carlos",
      "first_last_name": "Rodrigo",
      "secound_last_name": "Pérez",
      "phone_1": 3299910012,
      "phone_2": 3012290321
    },
    "data_processing_consent": "T",
    "reason_visit_id": 1,
    "other_reason": "Other reason",
    "workshop_appointment_id": 1,
    "service_channel_id": 1
  }`
  addRecepcion(recepcion): Observable<any> {    
    // console.log("post recepcion"+recepcion)
    var res = this.http.post(this.URL, recepcion);
    console.log("res-->"+Object.values(res));
    return res;
    
  }

  getRecepcion(id,type): Observable<any> {    
    console.log("id"+id)
    console.log("---- type  "+type)
    return this.http.get(this.URL +'?document_type_id='+type+'&'+'document_number='+id);
  }
  
  editRecepcion(id, recepcion): Observable<any> {    
    return this.http.put(this.URL + id, recepcion);
  }
}


// {
//   "user": {
//     "document_type_id": 1,
//     "document_number": "123456789",
//     "names_user": "Juan Carlos",
//     "first_last_name": "Rodrigo",
//     "secound_last_name": "Pérez",
//     "phone_1": 3299910012,
//     "phone_2": 3012290321
//   },
//   "data_processing_consent": "T",
//   "reason_visit_id": 1,
//   "other_reason": "Other reason",
//   "workshop_appointment_id": 1,
//   "service_channel_id": 1
// }

// {
//   "user": {
//       "document_type_id": "1",
//       "document_number": "00000000",
//       "names_user": "ffsdfs",
//       "first_last_name": "fsdfsdf",
//       "secound_last_name": "sdfsdf",
//       "phone_1": "132121321",
//       "phone_2": null
//   },
//   "data_processing_consent": "1",
//   "reason_visit_id": "2",
//   "other_reason": null,
//   "workshop_appointment_id": null,
//   "service_channel_id": "1"
// }

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  incTexto$ = new EventEmitter<any>();
  decTexto$ = new EventEmitter<any>();
  contraste$ = new EventEmitter<any>();

  constructor() { }
}

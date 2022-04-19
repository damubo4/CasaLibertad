import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variables/variables.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario_name: string = "usuario_name";
  escalaTexto: number = 1;
  color: string = "#595959";

  constructor(private variablesService: VariablesService) { }

  ngOnInit(): void {
    this.variablesService.incTexto$.subscribe(valor => {
      console.log(valor);
      this.escalaTexto = this.escalaTexto + 0.1;
    if (this.escalaTexto >= 1.7) {
      this.escalaTexto = 1.7;
    }
    });

    this.variablesService.decTexto$.subscribe(valor => {
      console.log(valor);
      this.escalaTexto = this.escalaTexto - 0.1;
    if (this.escalaTexto <= 1) {
      this.escalaTexto = 1;
    }
    });

    this.variablesService.contraste$.subscribe(datoContraste => {
      if (datoContraste === true ) {
        this.color = "#595959";
        console.log(datoContraste);
        } else if (datoContraste === false) {
          this.color = "#000";
          console.log(datoContraste);
        }
    });
  }

}

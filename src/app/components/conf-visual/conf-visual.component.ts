import { HighContrastMode } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variables/variables.service';

@Component({
  selector: 'app-conf-visual',
  templateUrl: './conf-visual.component.html',
  styleUrls: ['./conf-visual.component.css']
})


export class ConfVisualComponent implements OnInit {
  fontSize = 1;
  contraste = true;


  constructor(private variablesService: VariablesService) { }

  ngOnInit(): void {
  }

  increaseText($event) {
    // this.fontSize = this.fontSize + 0.1;
    // if (this.fontSize >= 1.7) {
    //   this.fontSize = 1.7;
    // }
    this.variablesService.incTexto$.emit($event);
  }

  decreaseText($event) {
    // this.fontSize = this.fontSize - 0.1;
    // if (this.fontSize <= 1) {
    //   this.fontSize = 1;
    // }
    this.variablesService.decTexto$.emit($event);
  }

  contrast($event) {
    this.contraste = !this.contraste;
    this.variablesService.contraste$.emit($event);
    // console.log($event);
  }

}

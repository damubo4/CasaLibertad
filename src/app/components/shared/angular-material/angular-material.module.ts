import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ],

  exports: [
    MatSliderModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule
  ],

  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: "primary" },
}]
})
export class AngularMaterialModule { }

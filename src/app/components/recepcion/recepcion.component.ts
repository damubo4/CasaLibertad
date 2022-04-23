import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RecepcionService } from 'src/app/services/recepcion/recepcion.service';
import { VariablesService } from 'src/app/services/variables/variables.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  isDisabled = true;
  escalaTexto: number = 1;
  color: string = "#595959";
  docVisit: number;
  stateForm: boolean = false;  

  myForm = this.myFormBuilder.group({
    aut_datos: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('1')]],
    tipo_doc: ['', [Validators.required]],
    documento: ['', [Validators.required]],
    nombres: ['', [Validators.required, Validators.maxLength(20)]],
    primer_apellido: ['', [Validators.required, Validators.maxLength(20)]],
    segundo_apellido: ['', [Validators.maxLength(20)]],
    tel_cont_1: ['', [Validators.required, Validators.maxLength(10)]],
    tel_cont_2: ['', [Validators.maxLength(10)]],
    razon_visita: ['', [Validators.required]],
    otro: ['', [Validators.required, Validators.maxLength(20)]],
    cita_taller: ['', [Validators.required]],
    canal_atencion: ['', [Validators.required]]
  });

  tipoDocumento = [
    { value: 1, tag: 'Cedula de Ciudadania' },
    { value: 2, tag: 'Documento extranjeria' },
    { value: 3, tag: 'Pasaporte' },
    { value: 4, tag: 'Tarjeta de identidad' }
  ];

  citaTaller = [
    { value: 1, tag: 'Articulador' },
    { value: 2, tag: 'Acogida' },
    { value: 3, tag: 'Individual' },
    { value: 4, tag: 'Familiar' },
    { value: 5, tag: 'Empleabilidad' },
    { value: 6, tag: 'Autoempleo/emprendimiento' },
    { value: 7, tag: 'Comunitaria' }
  ];

  razonVisita = [
    { value: 1, tag: 'Obtener información general del programa'},
    { value: 2, tag: 'Primera visita, interes en ser beneficiario' },
    { value: 3, tag: 'Cita con dimensión/articulador' },
    { value: 4, tag: 'Taller/curso/capacitación' },
    { value: 5, tag: 'Empleabilidad' },
    { value: 6, tag: 'Admministrativo' },
    { value: 7, tag: 'Otro' }
  ];

  canalAtencion = [
    { value: 1, tag: 'Presencial'},
    { value: 2, tag: 'Telefonico' },
    { value: 3, tag: 'Digital' }

  ];
  
  

  constructor(private myFormBuilder: FormBuilder,
              private variablesService: VariablesService,
              private _recepcionService: RecepcionService,
              private snackBar: MatSnackBar,
              private route: Router) { }

  ngOnInit(): void {
    this.variablesService.incTexto$.subscribe(valor => {
      
      this.escalaTexto = this.escalaTexto + 0.1;
    if (this.escalaTexto >= 1.7) {
      this.escalaTexto = 1.7;
    }
    });

    this.variablesService.decTexto$.subscribe(valor => {
      
      this.escalaTexto = this.escalaTexto - 0.1;
    if (this.escalaTexto <= 1) {
      this.escalaTexto = 1;
    }
    });

    this.variablesService.contraste$.subscribe(datoContraste => {
      if (datoContraste === true ) {
        this.color = "#595959";
        
        } else if (datoContraste === false) {
          this.color = "#000";
          
        }
    });

    this.myForm.get('otro').disable();
    this.myForm.get('razon_visita').valueChanges.subscribe(valor => {
      
      if(valor === '7'){
        this.myForm.get('otro').enable();
      } else if (valor !== '7') {
        this.myForm.get('otro').disable();
      }
    });

    this.myForm.get('cita_taller').disable();
    this.myForm.get('razon_visita').valueChanges.subscribe(valor => {
      
      if(valor === '3' ||  valor === '4'){
        this.myForm.get('cita_taller').enable();
      } else if (valor !== '3' || valor !== '4') {
        this.myForm.get('cita_taller').disable();
      }
    });

    this.myForm.get('tipo_doc').valueChanges.subscribe(valor => {
      
      if(valor === '1' ||  valor === '4'){
        this.myForm.get('documento').setValidators([Validators.maxLength(10), Validators.required]);
      } else if (valor === '2') {
        this.myForm.get('documento').setValidators([Validators.maxLength(6), Validators.required]);
      } else if (valor === '3') {
        this.myForm.get('documento').setValidators([Validators.maxLength(16), Validators.required]);
      }
    }); 
    
  }

  get isTipoDocumentoValid() {
    return this.myForm.get('tipo_doc').valid && this.myForm.get('tipo_doc').touched;
  }

  get isTipoDocumentoInvalid() {
    return this.myForm.get('tipo_doc').invalid && this.myForm.get('tipo_doc').touched;
  }

  get isDocumentoValid() {
    return this.myForm.get('documento').valid && this.myForm.get('documento').touched;
  }

  get isDocumentoInvalid() {
    return this.myForm.get('documento').invalid && this.myForm.get('documento').touched;
  }

  save(){     
    const RECEPCION = {
      user: {
        document_type_id: this.myForm.get('tipo_doc').value,
        document_number: this.myForm.get('documento').value,
        names_user: this.myForm.get('nombres').value,
        first_last_name: this.myForm.get('primer_apellido').value,
        secound_last_name: this.myForm.get('segundo_apellido').value,
        phone_1: this.myForm.get('tel_cont_1').value,
        phone_2: this.myForm.get('tel_cont_2').value,
      },
      data_processing_consent: this.myForm.get('aut_datos').value,
      reason_visit_id: this.myForm.get('razon_visita').value,     
      other_reason: this.myForm.get('otro').value,
      workshop_appointment_id: this.myForm.get('cita_taller').value,
      service_channel_id: this.myForm.get('canal_atencion').value
    };     
    console.log(RECEPCION);
    this._recepcionService.addRecepcion(RECEPCION).subscribe(datos => {
      this.snackBar.open('El registro se realizó con éxito','', {
        duration: 3000
        });
      this.route.navigate(['/inicio'])
    }, (error) => {
      this.myForm.reset();

      }
    )
  }

  consultaRecepcion(doc,tipo_doc) {
    this._recepcionService.getRecepcion(doc,tipo_doc).subscribe(datos => {      
      console.log(datos);
      this.snackBar.open('Se encontro un registro asociado a este documento','', {
        duration: 7000
        });

      this.myForm.patchValue({
        aut_datos: datos.data_processing_consent,
        tipo_doc: datos.user.document_type_id,
        documento: datos.user.document_number,
        nombres: datos.user.names_user,
        primer_apellido: datos.user.first_last_name,
        segundo_apellido: datos.user.secound_last_name,
        tel_cont_1: datos.user.phone_1,
        tel_cont_2: datos.user.phone_2,
        razon_visita: datos.reason_visit_id,
        otro: datos.other_reason,
        cita_taller: datos.workshop_appointment_id,
        canal_atencion: datos.service_channel_id
      })       
        if (datos.user.document_number != null) {
            this.stateForm = true;
      }       
    }, (error) => {
      if (error.status === 500) {
        this.snackBar.open('No se encontro un registro asociado a este documento','', {
          duration: 7000
          });
          this.stateForm = true;
      }
    }
    )
  } 
  
}


// {
//   1: {
//     sub_1: 3,
//     sub_2: 2
//   },
//   2: {
//     sub_1: 3,
//     sub_2: 2
//   },
//   4: ,
//   5: ,

// }



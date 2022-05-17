import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { VariablesService } from 'src/app/services/variables/variables.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown' ;
import { AcogidaAntService } from 'src/app/services/acogida/acogidaAnt/acogida-ant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acogida',
  templateUrl: './acogida.component.html',
  styleUrls: ['./acogida.component.css']
})
export class AcogidaComponent implements OnInit {
  isLinear = false;
  myNumberFieldMin: number = 0;
  myNumberFieldMax: number = 9999999999;
  escalaTexto: number = 1;
  color: string = "#595959";
  estado_delitos = false;


  crimesList = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  myForm = this.myFormBuilder.group({
    ent_1: ['', [Validators.required]],
    ent_2: ['', [Validators.required]],
    ent_3: ['', [Validators.required]],
    ent_4: ['', [Validators.required]],
    ent_5: ['', [Validators.required]],
    ent_6: ['', [Validators.required]],
    ent_7: ['', [Validators.required]],
    fecha_libertad: ['', [Validators.required, Validators.maxLength(10)]],
    meses_condena: ['', [Validators.required, Validators.min(this.myNumberFieldMin), Validators.max(this.myNumberFieldMax)]],
    establecimiento: ['', [Validators.required]],
    otro: ['', [Validators.required, Validators.maxLength(10)]],
    situacion_juridica: ['', [Validators.required]],
    apre_adol: ['', [Validators.required]],
    apre_may: ['', [Validators.required]],
    delitos: ['', [Validators.required]],    
    otros_delitos: this.myFormBuilder.array([]),
    proceso_actual: ['', [Validators.required, Validators.maxLength(2)]]
  });
  

  establecimientos = [
    { value: 1, tag: 'Carcel Distrital'},
    { value: 2, tag: 'Picota' },
    { value: 3, tag: 'Modelo' },
    { value: 4, tag: 'Buen Pastor' },
    { value: 5, tag: 'URI' },
    { value: 6, tag: 'Centro de reclusión especial (militar o policiva)' },
    { value: 7, tag: 'Estación de Policia' },
    { value: 8, tag: 'Otro' },
    { value: 9, tag: 'No Aplica' }
  ];

  situaciones = [
    { value: 1, tag: 'Absolución'},
    { value: 2, tag: 'Libertad condicionada (Ley 1820 de 2016)' },
    { value: 3, tag: 'Libertad condicional' },
    { value: 4, tag: 'Libertad provisional' },
    { value: 5, tag: 'Pena cumplida' },
    { value: 5, tag: 'Suspensión condicional de la ejecución de la pena' },
    { value: 5, tag: 'Suspensión de la pena (embarazo)' },
    { value: 5, tag: 'Detención domiciliaria' },
    { value: 5, tag: 'Prisión domiciliaria' }
  ];

  aprAdol = [
    { value: 1, tag: '1'},
    { value: 2, tag: '2' },
    { value: 3, tag: '3' },
    { value: 4, tag: '4' },
    { value: 5, tag: '5' },
    { value: 6, tag: '6' },
    { value: 7, tag: '7' },
    { value: 8, tag: '8' },
    { value: 9, tag: '9' },
    { value: 10, tag: '10' },
    { value: 11, tag: '11' },
    { value: 12, tag: '12' },
    { value: 13, tag: '13' },
    { value: 14, tag: '14' },
    { value: 15, tag: '15' }
  ];

  

  constructor(private myFormBuilder: FormBuilder,
              private variablesService: VariablesService,
              private acogidaService: AcogidaAntService) {}

  ngOnInit() {

    this.crimes();

    

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'uniqid',
      textField: 'crime',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

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
    this.myForm.get('establecimiento').valueChanges.subscribe(valor => {
      
      if(valor === '8'){
        this.myForm.get('otro').enable();
      } else if (valor !== '8') {
        this.myForm.get('otro').setValue("");
        this.myForm.get('otro').disable();
      }
    });

    // this.myForm.get('otros_delitos').disable();
    // this.myForm.get('check_otro').valueChanges.subscribe(valor => {
    //   if (valor == true) {
    //     this.myForm.get('otros_delitos').enable();        
    //   } else 
    //   if (valor == false) {
    //     this.myForm.get('otros_delitos').disable();
    //   }
    // });
    
  }

  addDelitos() {
    this.otrosDelitos.push(this.createDelitoField());
  }

  private createDelitoField() {
    return this.myFormBuilder.group({
      nuevo_delito: ['',]
    });
  }

  get otrosDelitos() {
    return this.myForm.get('otros_delitos') as FormArray;
    
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  Antecedentes() {
    const CRIMES = this.myForm.get('delitos').value;
    CRIMES.forEach(element => {
      delete element.crime;      
    });

    let tempArray = CRIMES.slice();
    tempArray = tempArray.map((elements)=> elements.uniqid);


    const O_CRIMES = this.myForm.get('otros_delitos').value
    let tempArray2 = O_CRIMES.slice();
    tempArray2 = tempArray2.map((elements)=> elements.nuevo_delito);

    const ANTECEDENTES =  {
      "court_records_id": {
        "record_policia_id": Number(this.myForm.get('ent_5').value),
        "record_codigo_id": Number(this.myForm.get('ent_6').value),
        "record_sisipec_id": Number(this.myForm.get('ent_7').value),
        "record_personeria_id": Number(this.myForm.get('ent_1').value),
        "record_procuraduria_id": Number(this.myForm.get('ent_2').value),
        "record_contraloria_id": Number(this.myForm.get('ent_3').value),
        "record_rama_id": Number(this.myForm.get('ent_4').value)
      },
      "freedom_date": this.myForm.get('fecha_libertad').value,
      "months_sentence": Number(this.myForm.get('meses_condena').value),
      "prison_establishment_id": Number(this.myForm.get('establecimiento').value),
      "another_prison_establishment": this.myForm.get('otro').value,
      "legal_status_id": Number(this.myForm.get('situacion_juridica').value),
      "apprehended_teenager": Number(this.myForm.get('apre_adol').value),
      "apprehended_adult": Number(this.myForm.get('apre_may').value),
      "crimes": tempArray,
      "other_crimes": tempArray2,    
      "actual_process": this.myForm.get('proceso_actual').value
    };

    this.acogidaService.addAntecedentes(ANTECEDENTES).subscribe(value => {
      Swal.fire(
        'El registro se realizó con éxito',
        '',
        'success'
        );
    }, (error) => {
      this.myForm.reset();

      }
    )

    console.log(ANTECEDENTES);
  }

  crimes() {
    this.acogidaService.getCrimes().subscribe(valor => {
      this.crimesList = valor;
      // console.log(this.crimesList);
    })

  }
}
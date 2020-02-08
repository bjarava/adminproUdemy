import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

   @ViewChild('txtporcentaje') txtPorcentaje: ElementRef;
  @Input() leyenda: string = 'Leyenda';

  @Input() porcentaje: number = 50;

  // tslint:disable-next-line: no-output-rename
  @Output('ActualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    /**console.log('Leyenda', this.leyenda);
    /**console.log('porcentaje', this.porcentaje);*/
  }

  ngOnInit() {
    /*console.log('Leyenda', this.leyenda);*/
    /**console.log('porcentaje', this.porcentaje);*/
  }
  onChanges( newValue: number ) {
    /**const elemHTML: any = document.getElementsByName('porcentaje')[0] ;*/



    /**console.log(this.txtPorcentaje);*/


    if (newValue >= 100) { this.porcentaje = 100 ;  } else if ( newValue <= 0 ) {this.porcentaje = 0; } else {this.porcentaje = newValue ; }

     /** elemHTML.value =  this.porcentaje;*/
    this.txtPorcentaje.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  CambiarValor( valor: number ) {
    if (this.porcentaje >= 100 && valor > 0 ) { return; }
    if (this.porcentaje <= 0 && valor < 0 ) { return; }
    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtPorcentaje.nativeElement.focus();
   }
}

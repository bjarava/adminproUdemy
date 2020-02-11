import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor( @Inject(DOCUMENT) private sDocuments) {
    this.cargarAjustes();
   }

  guardarAjuste() {
    console.log('Guardado en el localStarage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    console.log('Cargando de localStorage');
    if ( localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(temas: string) {
    const url = `assets/css/colors/${ temas }.css`;
    this.sDocuments.getElementById('temas').setAttribute('href' , url);
    /**this.sDocuments.getElementById('temas').setAtribute('href', url);*/

    this.ajustes.tema = temas;
    this.ajustes.temaUrl = url;

    this.guardarAjuste();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

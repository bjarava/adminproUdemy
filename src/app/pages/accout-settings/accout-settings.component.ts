import { Component, OnInit, Inject, ElementRef } from '@angular/core';
/**import { DOCUMENT } from '@angular/platform-browser';*/
import {DOCUMENT } from '@angular/common';
import { from } from 'rxjs';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  // tslint:disable-next-line: deprecation
  /**
   * CONSTRUCTOR
   * @param sDocuments Injectamos la clase DOCUMENT
   */
  constructor(public ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }
/**Cambiar color de los check */
  cambiarColor(temas: string, link: ElementRef) {
    console.log(link);
    this.aplicarCheck(link);

    this.ajustes.aplicarTema(temas);

  }
/**Aplicar cambios en los chack */
  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working'); /**Removemos la clase por default */
    }

    link.classList.add('working'); /**Adicionamos la clase */
  }
  /**Colocar chacke */
  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.ajustes.ajustes.tema;
    for ( const ref of selectores ) {
       if ( ref.getAttribute('data-theme') === tema ) {
            ref.classList.add('working');
            break;
       }
    }
   }
}

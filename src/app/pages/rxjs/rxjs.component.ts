import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor() {
    /**Trabajando con Observable, utilizamos la funcion observable, regresaObservable() ,
     * operadores: complete() no recibe parametros, filter() recibe parametros, map()  */
    // tslint:disable-next-line: semicolon

      this.subscription =  this.regresaObservable()
     /**.pipe( retry(2) ) */
     .subscribe (
       numero => console.log('Obser', numero),
       error => console.log('Error en el Obser', error ),
       () => console.log('el observador terminó')
      );
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

/**Funcion para retornar un obsevable */
  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;

      const intervalo = setInterval( () => {
        contador += 1;

        const salida = { valor:  contador };

        observer.next( salida );

        /** if ( contador === 3 ) {
          clearInterval( intervalo );
          La funcion complete() no recibe parametros
          observer.complete();
        } */

/** Aquí definimos las veces que queremos que se repita la solicitud del observer.next */
    /**    /**if ( contador === 2 ) {
          clearInterval( intervalo );
          /**La funcion Error del operador  de retry */
          /**observer.complete();*/
         /** observer.error('Error SOS');*/
      /**  } */

      }, 1000 ) ;

     } ).pipe( map( result => result.valor ),

     filter( ( valor, index ) => {

      if (valor % 2 === 1) {
        // Impar
        return true;
      } else {
        // Par
        return false;
      }
      /**console.log('Filter', valor, index ); */
       } )
      );
  }
}

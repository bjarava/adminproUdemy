import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
 
})
export class PromesasComponent implements OnInit {

  constructor() { 
/**Trabajando con promesas */
    this.contarTime().then(
      messaje => console.log('Terminó', messaje)
      )
      .catch( error => console.log('Error de la promesa', error  )  );
   }

  ngOnInit() {
  }

  contarTime(): Promise<boolean> {
    return  new Promise( ( resolve, reject) => {

      let contador = 0;

       let intervalo = setInterval( () => {
        contador += 1 ;
        console.log(contador );
        if ( contador === 3) {
          resolve(true );
          clearInterval(intervalo);
        }
      }, 1000 );
    }); 
  }

}

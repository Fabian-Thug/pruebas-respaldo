import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'ejecucion',
  templateUrl: './ejecucion.component.html',
  //styleUrls: ['./app.component.css']
})
export class EjecucionComponent  {
  title = 'Ejecución';
  fechaCoordinada: string; //variable para que la muestre 

   //recogiendo la fecha o puedes mostrarla en el component para que este siempre presente eaea!
  ngOnInit(){
    this.fechaCoordinada= localStorage.getItem('fechaCoordinada'); //aqui debe cargarla
       console.log(localStorage.getItem('fechaCoordinada'));
   }
    //imprimiendo cambios en la pagina
   ngDoCheck(){
     this.fechaCoordinada= localStorage.getItem('fechaCoordinada'); //aqui limpio la variable cuando
     //un dato se actualice
       console.log('Este es el Docheck en Ejecucion');
   }

   eliminarFecha(){
        //elimina datos en la sesion del navegador tipo cockie, para ser consultado
        localStorage.removeItem('fechaCoordinada');
         //vaciando todo el localstorage
        // localStorage.clearItem();
          //efectuando el cambio visual en la pagina asi el elemnto no existe
         this.fechaCoordinada= null;
    }

}

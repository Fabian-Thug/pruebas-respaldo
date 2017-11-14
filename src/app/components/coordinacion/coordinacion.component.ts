import  { Component, Input, Output,EventEmitter, OnChanges, SimpleChange, OnInit, DoCheck } from '@angular/core';

@Component({
 selector: 'coordinacion',
 templateUrl:'./coordinacion.component.html',
 //styleUrls:['./coordinacion.component.css']


})

export class CoordinacionComponent {
    @Input() nombre: string;
    public fecha: string; 
    public iteracion: number;
    public prioridad: string;
    public fechaCoordinada: string;

    //emite el dato
   // @Output() pasameLosDatos=new EventEmitter();

    constructor(){
        this.nombre= 'Coordinación de establecimiento para Prueba Respaldo';
        this.fecha= '20/15/2017';
        this.iteracion= 1;
        this.prioridad= 'De Prioridad Alta';

    }

    ngOnChanges(changes: SimpleChange){
        console.log("Existen Cambios");
    }

    ngOnInit(){ //1vez x componente
        console.log("Metodo On Init Lanzado");
    }
    ngDoCheck(){//c/vez que se ejecute un evento, desps del init
         console.log("el docheck se lanzo");
    }
     
    guardarFecha(){
        //guarda datos en la sesion del navegador tipo cockie, para ser consultado
        localStorage.setItem('fechaCoordinada', this.fechaCoordinada);
        //recogiendo el dato
        console.log(localStorage.getItem('fechaCoordinada'));
    }
      
    eliminarFecha(){
        //elimina datos en la sesion del navegador tipo cockie, para ser consultado
        localStorage.removeItem('fechaCoordinada');
         //vaciando todo el localstorage
        // localStorage.clearItem();
          //efectuando el cambio visual en la pagina asi el elemnto no existe
         this.fechaCoordinada= null;
    }




    //emitirEvento(){
    // this.pasameLosDatos.emit({
   // 'nombre': this.nombre,
   // 'fecha':  this.fecha,
   // 'iteracion': this.iteracion,
    //'prioridad': this.prioridad
     // });
   // }
}
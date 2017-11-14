import  { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';
import 'rxjs/RX';
import { Observable } from 'rxjs/RX';

//import { Establecimientos } from '../establecimiento/establecimiento.models';
//import { EstablecimientoService } from '../establecimiento/establecimiento.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
 selector: 'establecimiento',
 templateUrl:'./establecimiento.component.html',
 styleUrls:['./establecimiento.component.css']


})


export class EstablecimientoComponent{
    data: any = {};
    public titulo;
   public nombre_prioridad: string;
   public miCoordinacion;
  



    constructor(private _http: Http){
        this.titulo= 'Ejecución Prueba de Respaldo';
       // this.fechaCoordinacion;
       this.getMyBlog;
    }


    private getMyBlog() {
        return this._http.get('http://local.econecta_pr.cl/establecimientos/')
                 .map((res: Response) => res.json())
                     .subscribe(data => {
                            this.data = data;
                            console.log(this.data);
                    });
      }

    mostrarFecha(){
        console.log(this.nombre_prioridad);
    }

    verDatos(event){
        console.log(event);
        this.miCoordinacion=event;

    }

   

}
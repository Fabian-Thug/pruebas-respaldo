import { Component,OnInit,Input } from '@angular/core';
import { Http, Response, Headers, HttpModule } from '@angular/http';
import { Inicials } from '../inicial/inicial.models';
import 'rxjs/add/operator/map';
import 'rxjs/RX';
import { Observable } from 'rxjs/RX';

//Compoente que hace las consultas a la api
import { ApiPruebaRespaldo } from "../../providers/pruebaRespaldo.component";

//Declaracion de Jquery
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})

export class InicialComponent implements OnInit {
  loading: boolean = false;
  reload: boolean = false;
  Establecimientos: any;
  carga = false;
  data: any;
  contat = [];
  revision = [];
  contactos = {rol:"", nombre:"", apellido:"", contacto:"", correo:""};
  title = 'Este es el inicio de los establecimientos E-conecta';
  busqueda : any;
  p:any;
   ngOnInit(){
     //Hooks se ejecuta cada vez que se carga la pagina
     var that = this;
       console.log('Mostrando Este es el inicio de los establecimientos Pruebas de Respaldo');
       $(document).ready(function(){
        
        $('.collapsible').collapsible({
          onOpen: function(el) { that.reload = true; }, // Callback for Collapsible open
          onClose: function(el) { that.reload = false; } // Callback for Collapsible close
        });
        
        $('#modal1').modal();
        $('#modal2').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .0, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '40%', // Starting top style attribute
          endingTop: '10%'
        });
        $('#crearCampaña').modal();
        $('#mostrarEstablecimientos').modal();

        //or by click on trigger
        $('.trigger-modal').modal();
      }); 
   }

  constructor(private _http: Http , public api: ApiPruebaRespaldo) {
    this.getEstablecimientos();
  }


//PRINCIPAL
  private getEstablecimientos() {
    //console.log('evento');
    var datos;
    this.api.getEstablecimientos().then(
      data =>{
        console.log('this is the data');
        datos = data;
        this.data = datos.establecimient;
        Materialize.toast('Datos obtenidos');
        console.log(this.data);
        this.loading = true
      },err => {
        console.log('err'+ err);
        
      }
    );
  }

  //Evento encargado de obtener datos del componente de busqueda y filtro
  verDatos(event){
		//console.log(event);
		this.busqueda = event;
  }

  openObservaciones(id){
    console.log('se abre modal');
    
  }

  //Se ejecuta al hacer click en un estado
  obtenerContactos(id){
    //console.log(this.reload);
    this.carga = false;
    //console.log('click');
    if(this.reload){
      console.log('no se vuelve a cargar');
    }else{
      this.getContactosEstablecimientos(id);
    }
  }

  getContactosEstablecimientos(id){
    this.contat = [];
    var contatos
    //console.log(id);
    
    this.api.getContactosEstablecimientos().then(
      data =>{
        contatos = data;
        //console.log(data);
        
        for(let contacto of contatos.establecimient){
          if(contacto.id_establecimiento == id){
            //console.log('si hay datos');
            this.contactos.rol = contacto.rol;
            this.contactos.contacto = contacto.fono;
            this.contactos.nombre = contacto.nombre;
            this.contactos.apellido = contacto.apellido;
            this.contactos.correo = contacto.mail;
            //console.log(this.contactos);
            this.contat.push(this.contactos);
            this.carga = true; 
            //console.log(this.contat);
            
          }
        }
      },err =>{
        console.log(err);
      }
    );
  }

  //Agrega establecimientos para posteriormente pasarlos a otros estados
  agregarEstablecimiento(id){
    if(this.revision.length == 0){
      this.revision.push(id);
    }else{
      if(this.revision.indexOf(id) == -1){
        //console.log('indexof');
        this.revision.push(id);
      }else{
        var idarraydelete = this.revision.indexOf(id);
        //console.log(idarraydelete);
        $('#'+id).prop('checked', false);
        this.revision.splice(idarraydelete, 1);
      }
    }
    //console.log(this.revision);
  }
}


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'estados',
  templateUrl: './estados.component.html',
  //styleUrls: ['./app.component.css']
})
export class EstadosComponent implements OnInit {
  ngOnInit(){
    $(document).ready(function(){
      console.log('Ready Men!');
      $('ul.tabs').tabs();
    });
  }
  title = 'Este es la administracion de PR E-conecta';
  public busqueda : any;
  @Output() pasameLosDatos = new EventEmitter();
  constructor(){
    
  }
  emitirEvento(){
		this.pasameLosDatos.emit({
			'busqueda' : this.busqueda
		});
	}
}
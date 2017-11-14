import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'administracion',
  templateUrl: './administracion.component.html',
  //styleUrls: ['./app.component.css']
})
export class AdministracionComponent  {
  title = 'Este es la administracion de PR E-conecta';

   ngOnInit(){
       console.log('Mostrando Este es la administracion de PR E-conecta Pruebas de Respaldo');
   }
}

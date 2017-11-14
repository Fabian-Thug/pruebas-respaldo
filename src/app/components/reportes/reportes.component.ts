import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reportes',
  templateUrl: './reportes.component.html',
  //styleUrls: ['./app.component.css']
})
export class ReportesComponent  {
  title = 'Bienvenid@, Aqui se mostraran los reportes';
//  cuerpo = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis magna sed massa consequat fermentum. In porttitor porta varius. Quisque sed aliquam dolor. Vivamus euismod viverra ante. Suspendisse sed ipsum eget leo euismod hendrerit. Pellentesque id lobortis lacus. Maecenas luctus ultricies magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ut risus id nulla aliquet vehicula. Quisque quam risus, congue mollis elit et, cursus hendrerit eros. In vitae dolor aliquet, blandit erat ac, facilisis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel dignissim lacus. Donec elementum justo ut tincidunt placerat. Donec vel volutpat diam. Nunc sed hendrerit sem, sit amet feugiat diam';

   ngOnInit(){
       console.log('Inicio de Pruebas de Respaldo');
   }
}

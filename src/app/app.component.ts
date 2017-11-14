import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  home = false;
  constructor(){

  }
  OnInit(){
    console.log('se carga el puto home');
    
  }
}

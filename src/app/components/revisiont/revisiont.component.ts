import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'revisiont',
  templateUrl: './revisiont.component.html',
  //styleUrls: ['./app.component.css']
})

export class RevisiontComponent  {
  data : any;
  public open = false;
  title = 'Revisión establecimientos E-conecta';

  constructor(private _http: Http){
    this.getEstablecimientos();
  }

   ngOnInit(){
       console.log('Mostrando Revisión establecimientos E-conecta Pruebas de Respaldo');
   }


   private getEstablecimientos() {
    console.log('evento')
    return this._http.get('http://10.113.55.184/dev/ApiRestEconectapr/')
             .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data.establecimient;
                        console.log(this.data);
                        //this.recorre();
                });
  }

  recorre(){
    console.log(this.data.length);
    
    for(var i = 0; i < this.data.length; i++){
      console.log('datos');
    }
  }
}

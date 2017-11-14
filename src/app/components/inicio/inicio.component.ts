import { Component, OnInit } from '@angular/core';
import { ApiPruebaRespaldo } from "../../providers/pruebaRespaldo.component";
import { Http, Response, Headers, HttpModule } from '@angular/http';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  //styleUrls: ['./app.component.css']
})
export class InicioComponent  {
    title = 'Bienvenid@ a Pruebas de Respaldo de Econecta';
    cantidad_establecimiento ; loading; data: any;
    criticidad : number;
    constructor(private _http: Http , public api: ApiPruebaRespaldo){
      this.getEstablecimientos();
      this.criticidad = 0;
    }

    //Barras
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    public barChartLabels:string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Noviembre','Diciembre'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
   
    public barChartData:any[] = [
      //{data: [65, 45, 56, 12, 34, 45], label: 'Por Gestionar'},
      {data: [], label: 'Revisión'},
      {data: [], label: 'Coordinación'},
      {data: [], label: 'Ejecución'},
      {data: [], label: 'Prueba'},
      //{data: [35, 55, 86, 62, 44, 15], label: 'Resultado'}
    ];
    //Dona
    public doughnutChartLabels:string[] = ['Completos', 'Sopaipillas', 'Empanadas', 'Papas fritas', 'pizza'];
    public doughnutChartData:number[] = [350, 450, 100, 200, 500];
    public doughnutChartType:string = 'doughnut';

    //eventos
    public chartClicked(e:any):void{
      console.log(e);
    }

    public chartHovered(e:any):void{
      console.log(e);
      
    }
    public numeros_random(){
      this.doughnutChartData = [
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100),
        Math.round( Math.random() * 100)

      ]
    }
    public numeros_random_barras(){
      this.barChartData = [
        //{data: [65, 45, 56, 12, 34, 45], label: 'Por Gestionar'},
        {data: [Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100)], label: 'Revisión'},
        {data: [Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100)], label: 'Coordinación'},
        {data: [Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100)], label: 'Ejecución'},
        {data: [Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100), Math.round( Math.random() * 100)], label: 'Prueba'},
        //{data: [35, 55, 86, 62, 44, 15], label: 'Resultado'}
      ];
    }
    private getEstablecimientos() {
      console.log('evento');
      var datos;
      this.api.getEstablecimientos().then(
        data =>{
          console.log('this is the data');
          console.log(data);
          datos = data;
          this.data = datos.establecimient;
          this.cantidad_establecimiento = this.data.length;
          this.loading = true
          this.contador();
        },err => {
          console.log('err'+ err);
          
        }
      );
    }

  contador(){
    for(let criticidad of this.data){
      if(criticidad.criticidad == 3){
        //console.log('cantidad de criticos'+ this.criticidad);
        this.criticidad++
      }
    }
  }
}

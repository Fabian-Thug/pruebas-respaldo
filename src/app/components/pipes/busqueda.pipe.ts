import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'busqueda'
})

@Injectable()
export class BusquedaPipe implements PipeTransform{
    transform(items: any, term: any):any {
        if(term === undefined){
            return items;
        }
        console.log(items);
       // console.log(term);
            
        return items.filter(function(item){
            console.log(item.numero_minsal.toLowerCase().includes(term.busqueda.toLowerCase()));
            var algo = term.busqueda.toString().toLowerCase();
            //console.log(algo);
            //console.log(item.comuna.toLowerCase());
            if(item.numero_minsal.toLowerCase().includes(term.busqueda.toString().toLowerCase())){
                return item.numero_minsal.toLowerCase().includes(term.busqueda.toString().toLowerCase());
            }else if(item.comuna.toLowerCase().includes(term.busqueda.toString().toLowerCase())){
                return item.comuna.toLowerCase().includes(term.busqueda.toString().toLowerCase());
            }else if(item.tipo_sucursal.toLowerCase().includes(term.busqueda.toString().toLowerCase())){
                return item.tipo_sucursal.toLowerCase().includes(term.busqueda.toString().toLowerCase());
            }
        });
    }
}


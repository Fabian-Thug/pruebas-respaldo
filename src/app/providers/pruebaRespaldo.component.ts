import { Injectable } from "@angular/core";
import { Http, Response, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiPruebaRespaldo {
    url : any;
    constructor(private _http: Http){
        this.url ="http://10.113.55.184/";
    }
    getEstablecimientos(){
        return new Promise((resolve, reject)=>{
            this._http.get(this.url+'dev/ApiRestEconectapr/').map(res => res.json()).subscribe(
                data => {
                    return resolve(data);
                },err =>{
                    console.log('error al obetener los datos de la api');
                    return reject(err);
                }
            );
        }).catch(
            function (err){
                console.log(err);
                return Promise.reject('Error'+err);

            }
        );
    }
    getContactosEstablecimientos(){
        return new Promise((resolve, reject)=>{
            this._http.get(this.url+'dev/ApiRestEconectapr/contactos_e').map(res => res.json()).subscribe(
                data => {
                    return resolve(data);
                },err =>{
                    console.log('error al obetener los datos de la api');
                    return reject(err);
                }
            );
        }).catch(
            function (err){
                console.log(err);
                return Promise.reject('Error'+err);

            }
        );
    }
}
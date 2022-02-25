import { Injectable } from '@angular/core';


//Módulos necesarios para la comunicación AJAX
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/*
  Los servicios se generan con el comando: ng generate service nombre_servicio
  Solo tienen el fichero ts.
  Debe importarse en el módulo (app.module.ts)
*/

@Injectable({
  providedIn: 'root'
})
export class Alta {

  constructor(private http: HttpClient) { }

  enviar(url: string, datos: any){

    const dato = {
        'nombre': datos["nombre"],
        'descripcion': datos["descripcion"],
        'imagen': datos["imagen"]
    }


    const bodyJSON = JSON.stringify(dato)


    return this.http.post<any>(url, bodyJSON);
  }

  recibir(url:string):Observable<any>{


    return this.http.get(url);
  }
}

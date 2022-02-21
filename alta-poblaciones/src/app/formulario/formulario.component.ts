import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Poblaciones } from '../poblaciones';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  poblaciones: Poblaciones
  constructor() {
    this.poblaciones = new Poblaciones("", "")
  }

  ngOnInit(): void {
  }

  enviarDatos(){
    console.log(this.poblaciones.nombre + ' ' + this.poblaciones.descripcion);

  }

}

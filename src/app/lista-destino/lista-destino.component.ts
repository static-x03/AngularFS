import { DestinoViaje } from './../models/destino-viajes.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.css']
})
export class ListaDestinoComponent implements OnInit {
  destinos: DestinoViaje[]

  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url:string): boolean{
    this.destinos.push(new DestinoViaje(nombre, url));
    console.log(this.destinos);
    return false;
  }

}

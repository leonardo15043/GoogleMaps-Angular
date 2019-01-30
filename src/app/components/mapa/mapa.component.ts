import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private snackBar:MatSnackBar
  ) {

    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse( localStorage.getItem('marcadores'));
    }

   }

  ngOnInit() {
  }

  agregarMarcador( evento ){
    const nuevoMarcador = new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push( nuevoMarcador );
    this.guardarStorage();
    this.snackBar.open('Marcador agregardo', 'Cerrar');
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
  }

  borrarMarcador( i:number ){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar');
  }

}

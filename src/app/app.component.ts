import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Rebeca";
  nombre2 = "RebECa AuNOn CaRRasco";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario  = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise( (resolve, reject) => {
  setTimeout( () => resolve( 'Llego la data!' ), 3500 );
  });
// fecha = '2017-10-14'; // también se puede escribir de este modo si queremos meter una fecha concreta
fecha = new Date(); // así cogemos la fecha del sistema
}

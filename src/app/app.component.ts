import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  empleados:Empleado[] = [

    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Pedro', 'Perez', 'Director', 6500),
    new Empleado('Maria', 'Gomez', 'Jefa sección', 4500),
    new Empleado('Ana', 'Lopez', 'Administrativa', 2500),

  ]

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);

  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}

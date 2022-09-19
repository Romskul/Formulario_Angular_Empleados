import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';

  constructor(private miServicio:ServicioEmpleadosService){}

  empleados:Empleado[] = [

    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Pedro', 'Perez', 'Director', 6500),
    new Empleado('Maria', 'Gomez', 'Jefa sección', 4500),
    new Empleado('Ana', 'Lopez', 'Administrativa', 2500),

  ]

  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre + " " + miEmpleado.apellido);
    this.empleados.push(miEmpleado);

  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}

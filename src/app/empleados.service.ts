import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[] = [

    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Pedro', 'Perez', 'Director', 6500),
    new Empleado('Maria', 'Gomez', 'Jefa sección', 4500),
    new Empleado('Ana', 'Lopez', 'Administrativa', 2500),

  ]

  agregarEmepladoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);

    this.empleados.push(empleado);

  }

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { 



  }
}

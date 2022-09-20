import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices) {}

  empleados:Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 7500),
    new Empleado('Pedro', 'Perez', 'Director', 6500),
    new Empleado('Maria', 'Gomez', 'Jefa sección', 4500),
    new Empleado('Ana', 'Lopez', 'Administrativa', 2500),
  ]

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(indice:number){  
      this.empleados.splice(indice, 1);
  }

 
}

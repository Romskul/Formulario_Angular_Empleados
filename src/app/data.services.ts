import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{


    constructor (private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://mis-clientes-f83fa-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleados).subscribe(

            response => console.log("Se han guardado los empleados: " + response),

            error => console.log("Error al guardar los empleados: " + error),


        );



    }



}
class Empleado {
    constructor(nombreEmpleado, puesto){
        this.nombreEmpleado = nombreEmpleado
        this.puesto = puesto
    }

    consultarInfo(){
        console.log("Info Empleados");
        console.log(`Nombre: ${this.nombreEmpleado}, Puesto: ${this.puesto}`)
        
    }
}

const empleado1 = new Empleado("José", "Director Ejecutivo")
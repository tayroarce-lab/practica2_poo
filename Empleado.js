class Empleado {
    constructor(nombreEmpleado, puesto){
        this.nombreEmpleado = nombreEmpleado
        this.puesto = puesto
    }

    consultarInfo(){
        console.log("Info Empleados");
        this.nombreEmpleado.forEach(nombreEmpleado => {
            console.log(`- ${nombreEmpleado} ${puesto}`)
            
        })
    }
}

const empleado1 = new Empleado("José", "Director Ejecutivo")
class Departamento{
    constructor(nombreDept, empleados){
        this.nombreDept = nombreDept
        this.empleados= empleados
    }

    agregarEmpleados(){
        this.empleados.push(empleado)
    }

    mostrarEmpleados(){
        console.log(("Empleados del dpto"));
        this.empleados.forEach(empleado => {
            console.log(`Empleado ${empleado.nombreEmpleado}, puesto: ${empleado.puesto}`);
            
        })
        
    }
}
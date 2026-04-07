class Departamento{
    constructor(nombreDept, empleados){
        this.nombreDept = nombreDept
        this.empleados= empleados
    }

    agregarEmpleados(empleado){
        this.empleados.push(empleado)

        localStorage.setItem("departamentos", JSON.stringify(empresa.Departamento))
    }

    mostrarEmpleados(){
        console.log(("Empleados del dpto"));
        this.empleados.forEach(empleado => {
            console.log(`Empleado ${empleado.nombreEmpleado}, puesto: ${empleado.puesto}`);
            
        })
        
    }
}
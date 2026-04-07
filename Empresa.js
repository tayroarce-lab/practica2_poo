class Empresa {
    constructor(nombre, departamentos=[]){
        this.nombre = nombre
        this.Departamento = JSON.parse(localStorage.getItem('departamentos')) || departamentos;
    }

    agregarDepartamentos(departamento){
        this.Departamento.push(departamento)
        localStorage.setItem("departamentos", JSON.stringify(this.Departamento))
    }

    consultarInfo(){
        console.log("Información de la empresa");
        console.log(`Nombre de la empresa: ${this.nombre}`);
        this.Departamento.forEach(Departamento => {
            console.log(`Departamento de ${Departamento.nombreDept} `);
        });
        
    }
}

const empresa = new Empresa("Voltify");

const departamento1 = new Departamento("Desarrollo", [])
const departamento2 = new Departamento("Diseño", [])
const departamento3 = new Departamento("QA", [])

empresa.agregarDepartamentos(departamento1);
empresa.agregarDepartamentos(departamento2);
empresa.agregarDepartamentos(departamento3);

departamento1.agregarEmpleados(empleado1);

empresa.consultarInfo();
departamento1.mostrarEmpleados();
empleado1.consultarInfo();
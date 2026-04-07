class Empresa {
    constructor(nombre, departamentos=[]){
        this.nombre = nombre
        this.Departamento = JSON.parse(localStorage.getItem('departamentos')) || departamentos;
    }

    agregarDepartamentos(){
        this.Departamento.push(this.Departamento)
    }

    consultarInfo(){
        console.log("Información de la empresa");
        console.log(`Nombre de la empresa: ${this.nombre}`);
        this.Departamento.forEach(Departamento => {
            console.log(`Departamento de ${Departamento} `);
        });
        
    }
}

const empresa =  new Empresa ("Voltify")

const departamento1 = new Departamento ("Desarrollo", "5")
const departamento2 = new Departamento ("Diseño", "2")
const departamento3 = new Departamento ("QA", "1")
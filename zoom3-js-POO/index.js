class Alumno {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }

    bardear(insulto) {
        console.log(`¿Qué haces ${insulto}?`);
    }
    
}

const alumno1 = new Alumno("Carlos", 12);

alumno1.bardear("gato");
alumno1.saludar();

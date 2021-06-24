//Como se hacia antes
// function Rectangulo(base, altura){
//     this.base = base
//     this.altura= altura

// }

// Rectangulo.prototype.calcularArea = function(){
//     return this.base * this.altura
// }

// var rectangulo = new Rectangulo(6, 8)

// console.log(rectangulo.calcularArea())
// console.log(rectangulo.base)

// //Declaracion e Clases

// class Rectangulo2(){
//     contructor(base, altura){
//         this.base = base
//         this.altura = altura
//     }

//     calcularArea(){
//         return this.base * this.altura
//     }
// }

// var rectangulo2 = new Rectangulo2(6, 3)
// console.log(rectangulo2.calcularArea)


/*
       ***** Deber *****
*/
//  1.- Implementar getters , setters y realizar una implementacion.

    class Persona {
        constructor(nombre,apellido,edad,direccion){
            this.nombre = nombre
            this.apellido = apellido
            this.edad = edad
            this.direccion = direccion
        }

        get Datos_Persona(){
            return {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                direccion: this.direccion
                
            }
        }
        set cambio_Datos(nuevos){
            this.nombre = nuevos.nombre
            this.apellido = nuevos.apellido
            this.edad = nuevos.edad
            this.direccion = nuevos.direccion
        }
    }
    var persona = new Persona(`Bryan`,`Toapanta`,`25`,`Carcelen`)
    console.log(persona.Datos_Persona);
    persona.cambio_Datos = {nombre:`Andres`,apellido:`Granja`,edad:`21`,direccion:`El Condado`}
    console.log(persona.Datos_Persona);
/*      Salida en Consola
{   
    nombre: 'Bryan',
    apellido: 'Toapanta',
    edad: '25',
    direccion: 'Carcelen'
  }
  {
    nombre: 'Andres',
    apellido: 'Granja',
    edad: '21',
    direccion: 'El Condado'
  }*/

    //Implementacion metodos estaticos - Clase Punto, Function distancia
  
    class Punto {
        constructor(titulo, fecha) {
        this.titulo = titulo;
        this.fecha = fecha;
        }
    
        static Distancia(articuloA, articuloB) {
        return articuloA.fecha - articuloB.fecha;
        }
    }
    let articulos = [
        new Punto("HTML", new Date(2019, 1, 1)),
        new Punto("CSS", new Date(2019, 0, 1)),
        new Punto("JavaScript", new Date(2019, 11, 1))
    ];
    articulos.sort(Punto.Distancia);
    console.log( articulos[0].titulo );

  //Construir Clase Persona y estudiante, extender Estudiante con Persona
    
    class Persona {
        constructor(nombre, apellido){
            this.nombre = nombre
            this.apellido = apellido
        }
        opPersona(){
            return
             this.nombre,
             this.apellido
        }
    }
    class Estudiante extends Persona{
        opPersona(){
            console.log("Nombre de Estudiante: ",this.nombre + " " + this.apellido)
        }
    }
    var persona = new Estudiante("Bryan","Toapanta")
    persona.opPersona()
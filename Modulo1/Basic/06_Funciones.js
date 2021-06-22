
// var resultado = saludar()
// console.log(resultado);

// saludar2()

//console.log(saludarConPametros("Bryan","Toapanta","25 años"));

//console.log(saludarConProfesion());


/*
    FUNCIONES EXPRESIVAS -- FUNCIONES ANONIMAS              
*/

// var saludoConEdad = function(nombre, edad){
//     return `Hola soy ${nombre} y tengo ${edad} años`
// }
// console.log(saludoConEdad("Bryan", 25))

/*
    FUNCIONES FLECHA
*/

// var saludoconApellido = (nombre, apellido) =>  `Hola soy ${nombre} ${apellido}`
// console.log(saludoconApellido("Bryan", "Granja"));

//      EJEMPLO
// var suma = (num1, num2) => num1 + num2
// console.log(suma(10,20));

/*
    FUNCIONES CON PARAMETRO DE OTRAS FUNCIONES
*/
    
    //Tiempo en aparecer
    // setTimeout(() => {
    //     function saludaoconFunciones(nombre, cb){
    //         return cb(nombre)
    //     }
    //     var miSaludo = saludaoconFunciones("Bryan", function(nombre){
    
    //         return `Hola soy ${nombre}`
    //     } );
    //    console.log(miSaludo);
    // }, 3000);

    // Repite los intervalos
    // setInterval(() => {
    //     console.log("Hola Mundo");
    // }, 2000);
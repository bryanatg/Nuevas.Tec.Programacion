// console.log("Hola Mundo");

//      DEBER

//Consultar las funciones de console

/* 1.- Function Declaration */

// function hola(nombre){
//     console.log(`Hola ${nombre}.`)
// }
// hola('Bryan');


/* 2.- Function expression  */

// const SUMADOS = function sumaDos(valor) {
//     return valor + 2;
// }
// console.log(SUMADOS(5));

/* 3.- IIFE (Immediately Invoked Function Expression)  */

    // (function () {
    //     var letras = "ABC";

    //     // Esto imprime "ABC"
    //     console.log(letras);
    // })();

/* 4.- Shorthand method definition */

    // const poblacion = {
    //     personas: [],
    //     add(...personas) {
    //     this.personas.push(...personas);
    //     },
    //     saluda(index) {
    //     return `Hola soy ${this.personas[index]}`;
    //     }
    // };
    
    // console.log(poblacion.add('Luis', 'Jesus', 'Victor'));
    // console.log(poblacion.saluda(1));

/* 5.- Arrow function  */

    // const saluda = (nombre) => {
    //     return `Hola ${nombre}`;
    // }
    // console.log(saluda('Bryan'));
    // const saluda2 = (nombre) => `Hola ${nombre}`;
 

/* 6.- Generator function  */

        // function* hacedorIds() {
        //     var indice = 0;
        //     while(true)
        //     yield indice++;
        
        // }
        
        // var gen = hacedorIds();
        
        // console.log(gen.next().value); // 0
        // console.log(gen.next().value); // 1
        // console.log(gen.next().value); // 2

/* 7.- Function constructor  */

    // const sumaFunction = new Function('numero_1', 'numero_2', 
    // 'return numero_1 + numero_2'
    // );
    // console.log(sumaFunction(10, 15))
    //

/*
    Concatenar -- CONCAT
// */
var numeros = [1,2,3,4,5,6];
var nuevosNumeros = numeros.concat([7,8,9,10]);

// console.log(numeros);
// console.log(nuevosNumeros);

/*
    JOIN
*/
var nombre = ["B","r","y","y","a","n"];
// console.log(nombre.join("-"));

/*
    SLICE
*/
// console.log(nombre.splice());

/*
    INDEX OF
*/

// console.log(nombre.indexOf("y"));

/*
    LAST INDEX OF
*/
    //  console.log(nombre.indexOf("y"));

/*
    REVERSE
*/
// console.log(nombre.reverse(""));

/*
    SORT -- Ordena los numeros
*/
// var numeroDesordenados = [2,3,1,4,6,8,5,7];
// console.log(numeroDesordenados.sort());

/*
    SHIFT
*/
// console.log(numeroDesordenados.shift());


/*
    POP
*/
// console.log(numeroDesordenados.pop());

/*
    PUSH -- Agrega al arreglo
*/
// numeroDesordenados.push(1012, 12);
// console.log(numeroDesordenados);

/*
    Modificacion numeros pares a impares
*/

// var pares = [2,4,6,8,10];

// console.log(pares.map((elemento) => elemento + 1 ));

/*
        DEBER 
*/

//Consultar las funciones de arreglos(5)
/*
/*
    1.- includes()

    Determina si un array incluye un determinado elemento, 
    devuelve true o false según corresponda. 
*/
    // var num = [2,4,6,8,10,12,14];
    // console.log(num.includes(10));
// Salida : true

/*
    2.- filter()

    Crea un nuevo array con todos los elementos que cumplan 
    la condición implementada por la función dada.
*/
    // var num1 = [1,2,3,4,5,6];
    // var num = num1.filter(n => n > 3);
    // console.log(num);
// Salida : [ 4, 5, 6 ]

/*
    3.- reduce()

    Aplica una función a un acumulador y a cada valor de un
     array (de izquierda a derecha) para reducirlo a un único valor.
// */
// var redu = [10,20,30,40];
// var suma = redu.reduce((toatal, value) => toatal + value);
// console.log(suma);
// Salida : 21

/*
    4.- some()

verifica si algún elemento de un array cumple con el test implementado
por la función brindada. Si se aprueba, devuelve “true” de lo contrario “false”.
*/
// var som = [1,2,3,4,5,6,7,8];
// var largnum = som.some( n => n > 4);
// console.log(largnum);
// Salida : true

/*
    5.- every()

    Verifica si todos los elementos en el arreglo pasan la prueba 
    implementada por la función dada.
*/
var eve = [1,2,3,4,5,6];
var num = eve.every( n => n > 4);
console.log(num);
// Salida : false

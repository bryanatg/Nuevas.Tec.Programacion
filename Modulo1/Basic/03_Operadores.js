//Asigncion
//=

//Comparacion 
//==
//===


//console.log(2 == 2);
//console.log(2 === '2');


//!=

//console.log(2 != 3);
/*
>
<
<=
>=
*/

//Operadores Compuestos

/*
    += /  x = x + y
    -= / x = x - y
    *=
    /=
    %=
    **=


var numero = 3
numero -= 2;
console.log(numero);

*/

//Operadores Aritmeticos

/*
    +
    -
    *
    /
    %
    **
*/

//* Destructuracion  de objetos

var persona = { nombre: "Bryan" , apellido: "Toapanta", edad : 25, viajes: {destinos1:"colombia", destinio2: "argentina" } 
};

var { nombre:nombre2, apellido, viajes:{destinos1} } = persona;
console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(destinos1);

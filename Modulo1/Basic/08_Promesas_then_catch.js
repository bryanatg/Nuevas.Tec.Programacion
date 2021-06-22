/*
    Promesas
*/

// function promesa(bandera){
//     return new Promise((resolve, reject) => {
//         if (bandera) {
//             setTimeout(() => {
//                 resolve("Peticion Resuelta")
//             }, 3000);    
//         } else {
//           reject("La Operacion Fallo")  
//         }
        
//     })
// }
// promesa(true)
//     .then((resultado) => {
//         console.log("Respuesta Positiva", resultado)
//     })
//     .catch((error) => {
//         console.log("Error", error)
//     })

/*
    Promesa Expresiva
*/

var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion Resuelta")
        }, 3000);    
    } else {
      reject("La Operacion Fallo")  
    }
})
//Resolucion basica promesas
segundaPromesa(true)
    .then((resultado) => {
        console.log("Respuesta Positiva", resultado)
    })
    .catch((error) => {
        console.log("Error", error)
    })

//Encadenar Promesas
    promesa(true) //Peticion Clientes
        .then((resultado) => { //Respuestas Listas clientes
            console.log("Respuesta Positiva", resultado)
            return segundaPromesa(true)
        })
        .then((resultado) => {
            console.log(resultado)
        })

        .catch((error) => {
            console.log("Error", error)
        })
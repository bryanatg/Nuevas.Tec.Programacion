/*
    Async -- Await
*/

function promesa(bandera){
    return new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion Resuelta")
            }, 3000);    
        } else {
            setTimeout(() => {
                reject("La Operacion Fallo")                
            }, timeout);
        }
        
    })
}

(async () => {
    try {
        var respuesta = await promesa(true)
        console.log("Respuesta Positiva", respuesta)

    } catch (error) {
       console.log("Error", error)
 
    }
})()


// promesa(true)
//     .then((resultado) => {
//         console.log("Respuesta Positiva", resultado)
//     })
//     .catch((error) => {
//         console.log("Error", error)
//     })
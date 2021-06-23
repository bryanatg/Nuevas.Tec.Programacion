// npm init -y generar archivo sin preguntas
const express = require('express'); 

//Genero de una Aplicacion
const app  = express()
//EndPoint
app.get('/', (req, res) => {
    res.send("Hola Mundo con ExpressJS")
})

app.listen(3000, () => {
    console.log("Servidor Escuchado en  http://localhost:3000")
})
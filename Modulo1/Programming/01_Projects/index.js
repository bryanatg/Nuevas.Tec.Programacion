// npm init -y generar archivo sin preguntas
const express = require('express'); 

//Genero de una Aplicacion
const app  = express();

//Routers
const {RouterIndex} = require('./routes/index');
app.use( RouterIndex)
// app.use("/users", RouterIndex)
// app.use("/users/data", RouterIndex)
app.use(RouterIndex)

app.listen(3000, () => {
    console.log("Servidor Escuchado en  http://localhost:3000")
})


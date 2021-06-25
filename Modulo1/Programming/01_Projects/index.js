// npm init -y generar archivo sin preguntas
const express = require('express'); 

//Genero de una Aplicacion
const app  = express()
//EndPoint
app.get('/', (req, res) => {
    res.send("Hola Mundo con ExpressJS")
})

app.get("/saludo", (req, res) => {
    //req.query
    // console.log(req.query);
    const { query: {nombre, apellido}
    } = req;

    // const nombre = req.query.nombre
    // const apellido = req.query.apellido

    res.json({
        saludo: `Hola soy  ${nombre} ${apellido}`,
    });
});

app.get('/saludo/:nombre', (req, res) => {
    const { params: { nombre }, 
    } = req;

    res.json({
        nombre: nombre,
    })
});

app.listen(3000, () => {
    console.log("Servidor Escuchado en  http://localhost:3000")
})
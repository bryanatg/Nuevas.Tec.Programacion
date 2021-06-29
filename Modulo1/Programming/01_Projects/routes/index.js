//Traemos el paquete 
const { Router } = require('express');
const data = require("../data.json");
const { User } = require('../lib/Schemas/User');
const { DataValidator } = require('../middleware/DataValidator')

//Inicializamos el Router
const router = Router()

//CReamos el endPoint
router
.get("/",(req, res) =>{
    res.send("Hola Mundo");
})

.get("/saludo", DataValidator("query", User) ,(req, res) =>{
    const { query } = req;
    res.json({
        saludo: `hola soy ${query.nombre} ${query.apellido}`,
    });
})

.get(`/saludo/:nombre`, (req, res) => {
    const {params: {nombre}} = req;
    //const nombre =req.params.nombre
    res.json({
        nombre: nombre,
    })
})

//Exportamos las Rutas
module.exports.RouterIndex = router

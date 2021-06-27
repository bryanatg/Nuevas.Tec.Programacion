//Traemos el paquete 
const { Router } = require('express');

//Inicializamos el Router


const data = require("../data.json")
const router = Router()

//CReamos el endPoint
router.get("/",(req, res) =>{
    res.send("Hola mundo con ExpressJS");
})
.get("/saludo", (req, res) =>{
    const { query: {nombre, apellido} } = req;
    res.json({
        saludo: `hola soy ${nombre} ${apellido}`,
    })
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

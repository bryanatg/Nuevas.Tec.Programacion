//Traemos el paquete 
const { Router } = require('express');

//Inicializamos el Router
const router = Router()

//CReamos el endPoint
router
    .get("/", (req, res) => {
        res.send("Hola Mundo con ExpressJS")
    })

  

    .get("/saludo", (req, res) => {
        const { query } = req;
        res.json({
            saludo: `Hola soy  ${query.nombre} ${query.apellido}`,
        });

    })
    .get("/saludo/:nombre", (req, res) => {
        const { params } = req;
    
        res.json({
            nombre: params.nombre,
        })
    });
    

//Exportamos las Rutas
module.exports.RouterIndex = router

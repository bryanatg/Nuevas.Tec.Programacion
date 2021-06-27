const { Router } = require('express');
const data = require("../data.json")
const router = Router()

//Nombre y Apellido en mayúsculas
var modifDatos = data.map((usuarios) => {
    usuarios.first_name = usuarios.first_name.toUpperCase()
    usuarios.last_name = usuarios.last_name.toUpperCase()
    return usuarios
})

router
    .get("/", (req, res) => {
        res.send("Deber Backend en ExpressJS")
    })
    //Muestra todos los Usuarios
    .get("/users", (req, res) => {
        res.json({
            msg: "Lista de Usuario En Mayúsculas",
            body: [modifDatos]
        })
    })
    //Muestra la Informacion del Usuario por Id
    .get("/users-query", (req, res) => {
        const { query: { id } } = req
        var usuarioFilter = modifDatos.filter(person => person.id == id)
        if (id != null) {
            res.json({
                msg: "Retornar el objeto segun el Id del usuario",
                body: [usuarioFilter]
            })
        } else {
            res.json({
                msg: "Lista de Usuario En Mayúsculas",
                body: [modifDatos]
            })
        }


    })
    //Muestra el email del usuario  por su Apellido
    .get("/users-params/:apellido", (req, res) => {
        var { params: { apellido } } = req
        var apellidoPlus = apellido.toUpperCase()
        var buscarEmail = modifDatos
            .filter(function (ape) {
                return ape.last_name === apellidoPlus
            }).map(function (ape) {
                return ape.email
            })

        var ban = false
        for (const ape of data) {
            if (apellidoPlus === ape.last_name) {
                ban = true
                break;

            }

        }

        if (ban == true) {
            res.json({
                msg: " El Email Según su apellido es : ",
                body: [{ email: buscarEmail }]

            });

        } else {
            res.json({
                msg: "Error el Apellido no Existe",
                body: []

            });
        }







    })


module.exports.RouterIndexDeber = router
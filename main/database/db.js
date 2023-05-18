const db = require('electron-db');
const path = require('path');

const location = path.join(__dirname, '')

// Path: main\database\db.js

const dataBase = {};

dataBase.crear = (tabla) => {
    db.createTable(tabla, location, (succ, msg) => {
        if (succ) {
            console.log("Tabla creada correctamente")
        } else {
            console.log("Error al crear la tabla", msg)
        }
    })
}

dataBase.insertar = (datos, tabla) => {
    db.insertTableContent(tabla, location, datos, (succ, msg) => {
        if (succ) {
            console.log("Datos insertados correctamente")
        } else {
            console.log("Error al insertar datos", msg)
        }
    })
}

dataBase.getAll = (tabla) => {
    db.getAll(tabla, location, (succ, data) => {
        if (succ) {
            console.log(data)
        } else {
            console.log("Error al obtener los datos", data)
        }
    })
}

dataBase.get = (tabla, datos) => {
    db.getRows(tabla, location, datos, (succ, data) => {
        if (succ) {
            console.log(data)
        } else {
            console.log("Error al obtener los datos", data)
        }
    })
}

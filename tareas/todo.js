const fs = require('fs');

let listadoTareas = [];



const guardarBD = () => {

    let data = JSON.stringify(listadoTareas);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar la tarea', errr);
        }
    });
}

const actualizar = (descripcion, completado = true) => {

    cargarBD();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoTareas[index].completado = completado
        guardarBD();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarBD();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })


    if (index >= 0) {
        listadoTareas.splice(index, 1);
        guardarBD();
    } else {
        return false;
    }

}

const cargarBD = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch (e) {
        listadoTareas = [];
    }

}

const getListado = (completado = false) => {
    cargarBD();
    if (completado) {
        let listadoFiltrado = listadoTareas.filter(tarea => {
            return tarea.completado === completado;
        })
        return listadoFiltrado;
    } else {
        return listadoTareas;
    }


}


const agregarTarea = (descripcion) => {

    cargarBD();
    let item = {
        descripcion: descripcion,
        completado: false
    }

    listadoTareas.push(item);

    guardarBD();
    return item;

}

module.exports = {

    agregarTarea,
    getListado,
    actualizar,
    borrar
}
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { agregarTarea, getListado, actualizar, borrar } = require('./tareas/todo.js');

//console.log(argv);
let descripcion = argv.descripcion;
let completado = argv.completado;
let accion = argv._[0];


switch (accion) {
    case 'crear':
        agregarTarea(descripcion);
        break;
    case 'listar':
        let listado = getListado(completado);
        console.log("==================================".green);
        console.log("========== Tareas por hacer ======".green);
        console.log("==================================".green);
        for (let tarea of listado) {
            if (tarea.completado) {
                console.log(tarea.descripcion, "[TERMINADA]".green);
            } else {
                console.log(tarea.descripcion, "[PENDIENTE]".red);
            }
        }
        break;
    case 'actualizar':
        actualizar(descripcion, completado);
        break;

    case 'borrar':
        borrar(descripcion);
        break;

    default:
        console.log('No se encuentra una accion para el comando');
        break;
}
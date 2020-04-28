const optDesc = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la lista de tareas', {
        completado: {
            alias: 'c',
            default: false,
            desc: 'Lista todas las tareas completadas o las completadas',
            type: 'boolean'
        }
    })
    .command('crear', 'Guarda en disco una tarea', {
        descripcion: optDesc
    })
    .command('actualizar', 'Guarda en disco una tarea', {
        descripcion: optDesc,
        completado: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Marca como completado o no la tarea',
            type: 'boolean'
        }
    })
    .command('borrar', 'Borra una tarea del disco', {
        descripcion: optDesc
    })
    .help().argv


module.exports = {
    argv
}
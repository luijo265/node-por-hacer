const description = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea',
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como compleato o pendiente la tarea',
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description,
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        description,
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}
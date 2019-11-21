const argv = require('./config/yargs').argv
const colors = require('colors')
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = crear(argv.description)
        console.log(tarea)
        break;
    case 'listar':
        // console.log('Mostrar todas las tareas por hacer')

        let listado = getListado()

        for (const tarea of listado) {
            console.log('=============='.green)
            console.log(tarea.description)
            console.log('Estado: ', tarea.completado)
            console.log('=============='.green)
        }

        break;
    case 'actualizar':
        // console.log('Actualiza una tarea por hacer')

        let actualizado = actualizar(argv.description, argv.completado)
        console.log(actualizado)

        break;

    case 'borrar':
        // console.log('Actualiza una tarea por hacer')

        let borrado = borrar(argv.description)
        console.log(borrado)

        break;

    default:
        console.log('comando no reconocido')
        break;
}
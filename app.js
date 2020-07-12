//node app listar --l 20 --b 50
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo =>{
            console.log(`Archivo creado:`, colors.magenta(archivo))
        })
        .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}


let argv2 = process.argv;//parametros por consola
console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//node --help //ayuda de comandos por consola
//node app listar --help //ayuda a explicar lo que hace mi funcion

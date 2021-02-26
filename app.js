
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();
//console.log(process.argv);
//console.log(argv);
//console.log(argv.b)
//const base = 8;

//const [ , , arg3='base=5'] = process.argv;
//const [ , base = 5 ] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
   .then(msg => console.log(msg.rainbow))
   .catch(err=> console.log(err))
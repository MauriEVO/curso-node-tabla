const argv = require('yargs')
               .options({
                  'b': {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                  },
                  'l':{
                     alias: 'listar',
                     type: 'boolean',
                     default: false,
                    describe: 'Muestra la tabla en consola'
                  },
                  'h':{
                    alias: 'hasta',
                    type: 'number',
                    default: 12,
                    describe: 'Muestra la tabla hasta el numero que deseas en consola'
                 },
                })
                .check((argv, options) =>{
                  if(isNaN(argv.b)){
                     throw `La Base tiene que ser un número...`
                  }
                  return true;
                }).argv;


module.exports = argv;
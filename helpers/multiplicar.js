const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar=false, hasta=12)=>{
   try {
      
      let salida, consola = '';
      for (let i = 1; i <= hasta; i++){
         salida += `${base} x ${i} = ${base * i}\n`;
         consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
      }
      
      if(listar){
         console.log('====================='.green)
         console.log('  tabla de:', colors.blue(base))
         console.log('====================='.green)
         console.log(consola)
      }

      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
      
      return `la tabla: ${base} fue creado!!`
      
   } catch (error) {
      throw error
   }
}

module.exports={
   crearArchivo
}
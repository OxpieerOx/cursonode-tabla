
var colors = require('colors');
const fs = require('fs');



const crearArchivo = async (base,listar,hasta) => {
    
   try {
   
    let salida = ""
    for (let i = 1; i <= hasta; i++) {

        salida += `${base*i}\n`;
    }

    if(listar){
    console.log(colors.green("========================="))
    console.log(`Tabla del : ${base}`)
    console.log(colors.green("========================="))
    console.log(salida)
    }

    
    fs.writeFileSync(`./salida/tabla del ${base}-.txt`, salida);
    mensaje =`${base}-.txt`
    return mensaje;
       
   } catch (error) {
       return error;
   }
    
    
}





module.exports={
    crearArchivo,
  
}
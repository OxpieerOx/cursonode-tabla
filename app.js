
const {crearArchivo} = require('./Helpers/Multiplicar')

const argv = require('./config/yargs')
const colors = require('colors');

console.clear();


console.log('base: yargs', argv.base);

// const [,,arg3='base=5'] = process.argv;
// const [,base=5]= arg3.split("=")



 

// crearArchivo(argv.base)
// .then(nombredelArchivo=>console.log(nombredelArchivo,'creado'))
// .catch(err=>console.log(err));

crearArchivo(argv.b,argv.l,argv.h)
.then(nombredelArchivo=>console.log(nombredelArchivo.rainbow,'creado'))
.catch(err=>console.log(err));







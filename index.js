/**+-(2)-Al Igual que pasa en El Front-End con los Componentes de React.js, en el Back-End con Node.js podemos Dividir el Código en Módulos(que serían como los Componentes de React.js) para Administrar mejor el
 *  Código e Importarlos en el Archivo Principal con el método "const *file-name* = require('file-ubication')", como veremos a Continuación:_ (Ir al Archivo 'math.js' para seguir Aprendiendo).*/
const math = require('./math.js')


/**+-(6)-Node.js también cuenta con una Biblioteca de Módulos "Prefabricados" que ya vienen Pre-Instalados disponible en 'https://nodejs.org/en/docs/' cada uno con Código ya escrito que sirven para Crear Distintos
 *  Tipos de Aplicaciones de todo Tipo, estos Módulos "Prefabricados" de la misma forma que los que creamos nosotros pero sin el Directorio de Carpeta, así: "const *module-name* = require('*module-name*');".
 * +-A continuación Mostraremos un Ejemplo Práctico con el Módulo "Prefabricado" OS('os') que Proporciona Métodos y Propiedades (Que están descritos en la Documentación de este Módulo "Prefabricado" en 
 * 'https://nodejs.org/dist/latest-v14.x/docs/api/os.html#os_os') para trabajar con el Sistema Operativo, tanto Crear nuevos Archivos como Leerlos:_.*/
const os = require('os');


/**+-(8)-Ahora vamos a Importar el Módulo "Prefabricado" File System('fs') para poder Trabajar con los Archivos de nuestro Sistema:_.*/
const fs = require('fs');


/**+-(1)-Si quieres Ejecutar el Código a Continuación con Node.js simplemente tienes que en la Consola de Comandos(CMD en Windows) ubicado en la Carpeta de Tu Proyecto escribir el Comando "node *your-file*" donde
 * "*your-file*" viene a ser en Archivo a Ejecutar que en Nuestro caso es "index.js".*/
//console.log(add(5, 2)); (=> Esta Línea de Código ya no sirve pq se Escribió cuando las Funciones de Matemática estaban en este Mismo Archivo y no en "math.js")

/**+-(4)-Ahora para poder Ejecutar una Función Importada al Archivo Principal y Exportada desde un Módulo la Ejecutamos con normalidad PERO con la Diferencia que le Ponemos Como Prefijo el Nombre del Archivo/Módulo
 * del que Proviene seguido de un Punto. Ejemplo:_ "*file-name*.*func-name*(a, b);". Ejemplos Prácticos a Continuación:_.*/

console.log('+-Part Nº 4:_');
console.log(math.divide(5, 3));
console.log(math.add(6, 4));
console.log(math.substract(18, 5));
console.log(math.multiply(2, 7));
console.log(math.divide(9, 0));

console.log('           ');
console.log('<------------------------------------->');
console.log('           ');
/**(Para separar los Contenidos al Ejecutar la Consola).*/

/**+-(5)-Para ver qué guardamos en una Constante de Un Módulo que Importamos, simplemente la ponemos en un "console.log(*const*);" y al Ejecutar nuestro Archivo con Node.js nos mostrará en Consola u en Formato 
 * JSON su contenido:_.*/
console.log('+-Part Nº 5:_');
console.log(math);

console.log('           ');
console.log('<------------------------------------->');
console.log('           ');
/**(Para separar los Contenidos al Ejecutar la Consola).*/

/**+-(7)-Ahora vamos a ver Algunos de los Métodos del Módulo "Prefabricado" OS:_.*/
console.log('+-Part Nº 7:_');
console.log(os.platform()); //Me dice el Sistema Operativo de Mi PC.
console.log(os.release()); //Me dice la Versión del Sistema Operativo de Mi PC.
console.log('Free Mem: ', os.freemem(), ' Bytes.'); //Me dice la Cantidad de Bytes de Memoria Libre que queda en Mi Disco Duro/Sólido.
console.log('Total Mem: ', os.totalmem(), ' Bytes.'); //Me dice la Cantidad Total de Bytes de Memoria en Mi Disco Duro/Sólido.

console.log('           ');
console.log('<------------------------------------->');
console.log('           ');
/**(Para separar los Contenidos al Ejecutar la Consola).*/

/**+-(9)-Ahora vamos a ver Algunos de los Métodos del Módulo "Prefabricado" File System:_.*/
console.log('+-Part Nº 9:_');
/**+-(9)-El Método "fs.writeFile(***);" es una Función predefinida que como Argumentos toma 1ro el Archivo a Crear con su Ubicación y Nombre, como 2do Argumento el Contenido de este Archivo y
 * opcionalmente como 3er Argumento una Función "Callback"(Que significa "Devolución de Llamada") que sirve para hacer algo en caso de que haya habido (o no) un Error en el Proceso de
 * la Creación del Archivo. Esta forma de Escribir Código con JS en el Back-End se llama "Código Asíncrono", para que el Resto del Código escrito después de Él se Ejecute Independientemente
 * de si este "Código Asíncrono" terminó de Ejecutarse o no.
 * +-Como Ejemplo del Funcionamiento del "Código Asíncrono" vamos a ver que al Ejecutar el Siguiente Código, se va a Leer Primero el "console.log('Last Line of Code');" antes de que se lea 
 * el "console.log('The File has been Created.');", ya que la primera tarea Tarea más en Ejecutarse y está escrita en "Código Asíncrono".*/

fs.writeFile('./text.txt', 'Line One', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('The File has been Created.');
});

console.log('Last Line of Code');

console.log('           ');
console.log('<------------------------------------->');
console.log('           ');
/**(Para separar los Contenidos al Ejecutar la Consola).*/

/**+-(10)-Anteriormente CREAMOS un Archivo, Ahora vamos a usar otro Método del Módulo File System para LEER Archivos, el "fs.readFile(***);":_
 * +-Este Método toma como 1er Argumento la Ruta y Nombre del Archivo a Leer y como 2do Argumento una Función "Callback" que actua según el Programador desee tomando los Errores(err) si los hay
 * y/o los Datos(data).*/
console.log('+-Part Nº 10:_');
fs.readFile('./text.txt', function(err, data) { 
    if (err) {
        console.log('The Error is ', err);
    }
    console.log('The file has been read.');
    console.log('The Data of the File is the Next One:_ ', data.toString());// El Método ".toString()" sirve para Transformar esos Datos "Crudos" a un Formato String que los Humanos Puedan Leer.
});
/**+-PARA SEGUIR APRENDIENDO IR AL ARCHIVO "server.js".*/

console.log('           ');
console.log('<------------------------------------->');
console.log('           ');
/**(Para separar los Contenidos al Ejecutar la Consola).*/

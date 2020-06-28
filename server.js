/**+-(11)-Para Poder Crear y Trabajar Servidores que usan el Protocolo HTTP(https://developer.mozilla.org/es/docs/Web/HTTP/Overview) vamos a Importar el Módulo "Prefabricado" HTTP('http'):_.*/
const http = require('http');

/**+-(13)-Instalación de un Módulo Externo de la Comunidad de Node.js(Ir más abajo para seguir viendo la Parte 13).*/
const colors = require('colors');

/**+-(12)-Ahora vamos a crear un Servidor con el Método "http.createServer((req, res) => {***});":_.*/
console.log('+-Part Nº 12:_(Para Ver Ir al Navegador e Ingresar la URL "localhost:3000")');

const handleServer = (req, res) => { /**+-"req" es la Abreviación de "request"(Petición) y "res" de "response"(Respuesta).*/

    res.writeHead(200, {'Content-Type': 'text/html'}); //+-"res.writeHead" sirve para Darle Información Extra al Navegador.

    // El Nº 200 Corresponde a un Código de Estado de HTTP que Significa que la Peticion es Correcta. Ver más en https://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP.
    // El JSON "{'Content-Type': 'text/html'}" sirve para Indicarle al Navegador que lea este Documento como Texto HTML (https://www.w3schools.com/nodejs/nodejs_http.asp).

    res.write('<h1>Hello World from Node.js.</h1>');
    res.end(); //+-"res.end();" indica que la respuesta ha Terminado y que se puede seguir recibiendo Peticiones.
};

const server = http.createServer(handleServer);

server.listen(3000, () => {
    console.log('Server on Port 3000'.green); //+-"listen(3000);" hace que se Ejecute nuestro Servidor en el Puerto 3000.
});        /**(Leer más abajo para saber para que sirve el Método ".green").*/


/**+-(13)-NPM:_El Node Package Managment(Administrador de Paquetes de Node) sirve para Importar Módulos y Funcionalidades Extras creadas por la Comunidad de Usuarios de Node.js y que no están Instalados por Defecto 
 * en Node.js . Podemos ver su Documentación en https://www.npmjs.com para poder ver cómo usarla y demás.
 * +-POR EJEMPLO:_ Si queremos que las letras del Mensaje "Server on Port 3000" aparezcan en la Consola de otro color, debemos Instalar el Módulo NPM de la Comunidad "colors" (https://www.npmjs.com/package/colors), 
 * y para eso abrimos la Consola de Comandos en la Ruta de la Carpeta de Nuestro Proyecto y escribimos el Comando "npm i colors", y luego lo Importamos como un Módulo "Prefabricado" más.
 * 
 * +-Ahora para Usarlo, como dice su Documentación, Si queremos que las letras del Mensaje "Server on Port 3000" aparezcan en la Consola de otro Color Verde, le Escribimos a Continuación al String
 * del Mensaje en la Consola el Método ".green" y quedaría así:_
 * 
 *      console.log('Server on Port 3000'.green);
 * .*/

/**+-(14)-Crear un Archivo "package.json" con el Comando "npm init":_ Mejor Explicado en https://docs.npmjs.com/cli/init .*/

/**+-(15)-.*/

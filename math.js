function add(x1, x2) { 
    return x1 + x2; 
};

function substract(x1, x2) {
    return x1 - x2; 
};

function multiply(x1, x2) { 
    return x1 * x2; 
};

function divide(x1, x2) {
    if (x2 === 0) {
        console.log("You can't divide for 0.");
}else{ return x1 / x2; }
};


/**+-(3)-Para Exportar una Función desde un Módulo y así poderla Importar en el Archivo Principal, usamos el Método "exports.*func-name* = *func-name*;" , como a Continuación:_.*/
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
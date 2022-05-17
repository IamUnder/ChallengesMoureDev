/**
 * 
 * Reto #20: Parando el tiempo
 * Dificutad: Media
 * 
 * Enunciado: Crea una funcion que sume dos numeros y retorne su resultado pasado unos segudos.
 * - La funcion recibira por parametros los dos numeros a sumar y el tiempo en segundos que se demora en ejecutarse.
 * - Si el lenguaje lo soporta, debera retornar el resultado de forma asincrona.
 * 
 */

const prompt = require("prompt")
prompt.start()

function main () {
    // Definimos los campos que necesitamos
    var schema = {
        properties: {
            number1: {
                description: 'Ingresa el primer numero: ',
            },
            number2: {
                description: 'Ingresa el segundo numero: ',
            },
            time: {
                description: 'Ingresa el tiempo en segundos: ',
            }
        }        
    };
    // Pedimos los datos al usuario
    prompt.get(schema, (err, result) => {
        if (err) { return onErr(err) }
        console.log(`El resultado de la suma es: ${parseInt(result.number1) + parseInt(result.number2)}`);
        return setTimeout(() => {
            console.log(`El proceso ha finalizado en ${result.time} segundos`); 
        }, result.time * 1000)
    })
}

function onErr(err) {
    console.log(err)
    return 1
}

module.exports = {
    main
}
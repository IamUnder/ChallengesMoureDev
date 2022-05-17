// Importacion de paquetes
const prompt = require("prompt")

// Funcion de inicio
prompt.start()

// Descripcion de los desafios que se pueden ejecutar
const challenges = {
    "20": "Reto 20: Parando el tiempo"
}

// Mostramos los desafios disponibles
console.log("/*********************************************************/");
for (let key in challenges) {
    console.log(`${challenges[key]}`)
}
console.log("/*********************************************************/");

// Pedicion de datos al usuario
console.log("Que desafio deseas probar?");
prompt.get(['desafio'], (err, result) => {
    if (err) { return onErr(err) }
    if (!challenges[result.desafio]) return console.log("Desafio no encontrado");

    // Carga del desafio
    const file = require(`./challenges/${result.desafio}.js`)
    // Ejecucion del reto
    console.log(file.main());
})

// Funcion de error
function onErr(err) {
    console.log(err)
    return 1
}
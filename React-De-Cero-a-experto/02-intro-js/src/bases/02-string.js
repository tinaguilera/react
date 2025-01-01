const nombre = "Martin"
const apellido =  "Aguilera"
const nomCom =  nombre + " " + apellido
const nomCom2 = `${nombre} ${apellido}`
console.log(nomCom2)

function getSaludos(nombre){
    return `Hola ${nombre}`
}
console.log(`Es es un texto: ${getSaludos(nombre)}`)
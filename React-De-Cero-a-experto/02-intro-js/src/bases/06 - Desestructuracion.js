// Destructuracion

const persona = {
    nombre: "Martin",
    edad : 25,
    clave : "tin"

};



const retornaPersona = (persona) => {
    const {nombre : nombre2,edad, clave} = persona;
    console.log(nombre2)
    console.log(edad)
    console.log(clave)
}

//retornaPersona(persona)


const userContext = ({nombre,clave,edad,rango ="capitan"})=>{
    //console.log("Este es el nombre desestructurando "+nombre);
    //console.log("Si una propiedad no viene en el objeto puedo poner valores por defecto "+rango);
    return {
        nombreClave: clave,
        anios:edad,
        direccion : {
            calle :"Ituzaingo",
            num : 491
        }
    }

}
const p2 = userContext(persona)
const {nombreClave,anios,direccion : {calle , num: numero}} = p2;

console.log(nombreClave)
console.log(anios)
console.log(calle)
console.log(numero)




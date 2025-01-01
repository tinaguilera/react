const personajes = ['Goku','Vegeta','Trunks'];
const [,,per3] = personajes;
console.log(per3)

const retornaArreglo= ()=> ['ABC',123];

const [letras,numeros] =  retornaArreglo();
console.log(letras)
console.log(numeros)

const pepe = (valor) => {
    return [valor,()=>{console.log("Hola mundo")}];
}
const [nombre,setNombre] = pepe("ana");
console.log(nombre);
setNombre()
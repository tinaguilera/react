const product = {
    nombre : "Tablet",
    price : 100,
    avaiable : false
    
}

const customer = {
    nombre : "Juan",
    premium : true,
    direccion : {
        calle : "Ituzaingo",
        numero : 491
    }
    
}
const {nombre} = product
const {nombre : nombreCustomer,direccion:{calle,numero}} = customer


const carrito = {
    cantidad : 1,
   ...product
}
console.table(carrito)


const nuevoObjeto ={
    ...product ,
    ...customer
}

console.table(nuevoObjeto)

const nuevoObjeto2 = Object.assign(product, customer)
console.table(nuevoObjeto2)
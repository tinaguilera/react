const product = {
    nombre : "Tablet",
    price : 100,
    avaiable : false
    
}
//Object.freeze(product)
//Object.seal(product)

console.table(product)
const {nombre,price} =product;
console.log(nombre , price)

const auth = true
const user = "Tin"
const nuevoObjeto = {
    auth  ,
    user  
}
console.log(nuevoObjeto)

product.image = "im.jpg"
delete product.price
product.avaiable=true;
console.table(product)

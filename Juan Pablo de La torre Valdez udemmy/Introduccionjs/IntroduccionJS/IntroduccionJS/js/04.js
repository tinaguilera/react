const auth = true
const saldo = 1300
const pagar = 1200
const tarjeta = true

console.log(auth?"Si":"No")

saldo>pagar ? tarjeta? console.log("Pago"):console.log("Solo aceptamos tajeta"):console.log("no te alcanza")




//optional chaining

const alumno ={
    nombre:'Martin',
    clase : 'p1',
    aprobado : true,
    ex : {
        a:39
    }

}

console.log(alumno.ex?.a)
console.log('Despues de alumno')


//nullish coalescing operator (??)

const pagina = null ?? 1
console.log(pagina)




auth && console.log('Usuario auth')
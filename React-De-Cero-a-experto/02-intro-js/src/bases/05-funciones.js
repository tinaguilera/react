
const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola2, ${nombre}`
}

const saludar3 = (nombre) => `Hola3, ${nombre}`

console.log(saludar("Martin"))

console.log(saludar2("Martin"))
console.log(saludar3("Martin"))


const getUser = () => ({
    uid: 1234,
    username: " tin"
})


console.log(getUser())



const getUserActivo = function (nombre) {
    return {
        uid: 1234,
        username: nombre
    }
}
const userActivo = getUserActivo("Martin");
console.log(userActivo)


const getUserActivoA = (nombre) => ({
    uid: 12345,
    username: nombre
})

console.log(getUserActivoA("Martin"))
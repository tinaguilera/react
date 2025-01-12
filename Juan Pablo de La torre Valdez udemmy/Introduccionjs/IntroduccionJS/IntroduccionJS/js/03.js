const techs = ['HTML','CSS','JS','React.js','Node.js','Nest.js','TS']
const numero = [1,2,3,5,61,214,124,12,412,4]


techs.forEach(tech  => console.log(tech))

const arrMap = techs.map(tech=>{
    return tech +"Martin"
})
console.log(arrMap)

const pares = numero.filter(num => num%2 === 0)
console.log(pares)


const res = numero.includes(53)
console.log(res)

const some1 = numero.some(num => num<-100)
console.log(some1)

const find1 = numero.find(num => num%2===0)
console.log(find1)

const every1 = numero.every(num => num>-1)
console.log(every1)

const reduce1 = numero.reduce((total,numero)=>total + numero,0)
console.log(reduce1)
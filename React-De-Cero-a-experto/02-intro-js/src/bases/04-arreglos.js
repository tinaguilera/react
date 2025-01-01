//Arreglos
const arreglo =  [1,2,3,4]
let arr2 = [...arreglo,5];
const arr3 = arr2.map(function(num){
    return num**2
});
console.log(arreglo)
console.log(arr2)
console.log(arr3)

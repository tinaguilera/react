const persona = {
    nombre : 'Martin',
    apellido : 'Aguilera',
    edad : 25,
    direccion : {
        ciudad : 'San Jose',
        zip : 80000,
        lat: 14.3232,
        lng : 123.12,
    },

};
console.log(persona.nombre + " "+ persona.apellido + " "+persona.edad);
console.log(persona)
console.log({persona})
console.table(persona)

const persona2 = persona; // Es el mismo objeto se copia la referencia de la direccion de memoria

const persona3 = {... persona}; // Aca si copie los valores pero es otro objeto
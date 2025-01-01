import {getHeroeById} from "./bases/08-imp-exp"

/*const promesa = new Promise((resolve,reject)=>{

    setTimeout(() => {
        const heroe = getHeroeById(3); 
        if(heroe === undefined)
            reject(`no se pudo encontrar el heroe`)
        resolve(heroe)

    }, 3000);

    


}); // Son asincronas 

promesa.then((x)=>{
    console.log(x)
}).catch(err => console.warn(err))*/


const getHeroeByIdAsync = (id)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            const heroe = getHeroeById(id); 
            if(heroe === undefined)
                reject(`no se pudo encontrar el heroe`)
            resolve(heroe)
    
        }, 3000);
    
        
    
    
    });
}

getHeroeByIdAsync(4).then(console.log ).catch(console.warn)
getHeroeByIdAsync(44).then(console.log ).catch(console.warn)

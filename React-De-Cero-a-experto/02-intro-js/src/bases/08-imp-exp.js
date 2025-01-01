//import {heroes} from './bases/data/heroes'

import heroes , {owners} from "../bases/data/heroes";



//import {heroes} from './bases/data/heroes'

//console.log(heroes)

export const getHeroeById = (id) => {
   
        return heroes.find((heroe) => {
            return heroe.id===id
        });
    
   
}

export const getHeroesByOwner  = (owner) => heroes.filter((heroe)=>heroe.owner==owner)

//console.log(getHeroeById(3))
//console.log(getHeroesByOwner("Marvel"));
//console.log(owners)

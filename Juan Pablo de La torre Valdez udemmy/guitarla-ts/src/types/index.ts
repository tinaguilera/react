export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    
  };
  
export type CartItem = Guitar &  {
    quantity : number


}
//exporto el tipo de dato de id de Guitar
//export type GuitarId = Pick<Guitar,'id'>
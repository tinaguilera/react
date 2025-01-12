const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'

const consultarAPI = async () => {
    try {
       const inicio = performance.now() 
       const res = await fetch(url);
       if(!res.ok){
           throw new Error("hubo un error")
       }
       const data  = await res.json();
       console.log(data)
       const res2 = await fetch(url2);
       if(!res2.ok){
           throw new Error("hubo un error")
       }
       const data2  = await res2.json();
       console.log(data2)
       const fin = performance.now() 
       console.log("ConsultarAPI",fin-inicio,'ms')

    } catch (error) {
       console.log(error.message())
    }
   }
   
   
   const consultarAPI2 = async () =>{
    try {
        const inicio = performance.now();

        const [ res1,res2] = await Promise.all([fetch(url),fetch(url2)])// comienza los fetch al mismo tiempo
        const [data1,data2] =  await Promise.all([res1.json(),res2.json()])

        console.log(data1)
        console.log(data2)
        
        const fin = performance.now();
        console.log("CONSULTARAPI2",fin-inicio,"ms")

    } catch (error) {
        
    }
   }
   consultarAPI();
   consultarAPI2();

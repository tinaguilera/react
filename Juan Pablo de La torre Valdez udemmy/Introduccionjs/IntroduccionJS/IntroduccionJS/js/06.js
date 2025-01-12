const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
fetch(url)
    .then((response)=> {return response.json()})
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(err => console.log(err))

const consultarAPI = async () => {
 try {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error("hubo un error")
    }
    const data  = await res.json();
    console.table(data)
 } catch (error) {
    console.log(error.message())
 }
}
consultarAPI()



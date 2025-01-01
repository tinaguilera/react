const getImagen = async () => {

    try {
        const apiKey = 'fBFefS7IBZF3I4byXw749bArYwXsUTQp';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await peticion.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        //manejo del error
    }



}
getImagen();





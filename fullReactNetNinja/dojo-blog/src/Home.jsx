import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [delBlog, setDel] = useState(0); // Inicializamos delBlog como 0 para que el efecto se ejecute inicialmente
    
    const handleDelete = (id) => {
        fetch("http://100.115.92.195:3001/blogs/" + id, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                // Usamos una función de actualización basada en el valor anterior
                setDel(prevDel => prevDel + 1);
            }
        })
        .catch(error => console.error("Error en la solicitud:", error));
    };
    
    useEffect(() => {
        // Realiza una solicitud HTTP usando fetch
        fetch("http://100.115.92.195:3001/blogs")
            .then(response => response.json())
            .then(data => {
                setBlogs(data);  // Actualiza los blogs con los datos obtenidos
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [delBlog]);  // Este useEffect se ejecuta cada vez que cambia delBlog
    
    
      


    return (
        <>
            <div className="home">

                {blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />}
                 
                



            </div>
        </>
    );
}

export default Home
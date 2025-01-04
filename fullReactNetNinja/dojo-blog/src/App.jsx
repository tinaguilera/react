
import Navbar from './navbar';
import Home from './Home'
function App() {
  const title = `Martin Aguilera`;
 
  const page = "http://www.google.com"
  return (
    <>
      <div className='app'>
        <Navbar/>
        <div className="content">
           
          <Home/>
             
        </div>
        
      </div>
     
    </>
  )
}

export default App

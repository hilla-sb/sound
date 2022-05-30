
import './App.css';
import Navbar from './componentes/paginas/Navbar.js'
import Discover from './componentes/paginas/Discover.js'
import Home from './componentes/paginas/Home.js'
import Footer from './componentes/paginas/Footer.js'
import Join from './componentes/paginas/Join.js'


function App (){

    return(
        <div className = "App" >
      
          <Navbar/>
          <Home/>
          <Discover/>
          <Footer/>
          <Join/>
    
        </div>
    );
    
    }
    export default App;
    



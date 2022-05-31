
import './App.css';
import Navbar from './componentes/paginas/Navbar.js'
import Discover from './componentes/paginas/Discover.js'
import Home from './componentes/paginas/Home.js'
import Join from './componentes/paginas/Join.js'
import Footer from './componentes/paginas/Footer.js'


function App (){

    return(
        <div className = "App" >
      
          <Navbar/>
          <Home/>
          <Discover/>
          <Join/>
          <Footer/>
        </div>
    );
    
    }
    export default App;
    



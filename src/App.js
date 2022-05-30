//import logo from './logo.svg';
//import { hover } from '@testing-library/user-event/dist/hover';
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './componentes/Navbar.js'
import Discover from './componentes/paginas/Discover.js'
import Home from './componentes/Home.js'

//import Home from './componentes/paginas/Home' 
function App (){

    return(
        <div className = "App" >
      
          <Navbar/>
          <Home/>
          <Discover/>
         
         
          
    
        </div>
    );
    
    }
    export default App;
    


/*

<Router>  </Router>*/
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

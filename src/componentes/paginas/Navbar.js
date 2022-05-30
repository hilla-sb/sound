import React from 'react'
import logo from '../imagenes/logo.png'

function navbar (props)  {
    
    return (
      <div className ="nav">
        <nav className ="navbar">
        <div><img className="logo" src={logo} alt="Logo" /> SoundWave</div>
        <ul class="nav-links">
            <div class="menu">
                <li className="nav-link">Discover</li>
                <li className="nav-link">Join</li>
            </div>
        </ul>
</nav>
</div>

)
}
export default navbar
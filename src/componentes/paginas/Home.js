import React from 'react'
import Grid from '@mui/material/Grid';
import girl from '../imagenes/landing-page-girl.png' 

const Home = () => {
  
return(
  
  <div id='Home-P' style={{ paddingTop: "10%", paddingBottom: "10%" }}>

      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <div className="item"> <img className="Chica" src={girl} alt="girl" style={{ width: "80%" }} /> </div>
        <div class="item"> <h1>Feel The Music</h1>
          <p>Stream over 20 thousan song whit one click</p>
          <button className="button">Join Now</button>
        </div>

      </Grid>

    </div>
);

}

export default Home  


import {Button, Box, Typography } from "@mui/material";
import Covers from "../imagenes/covers.jpg";
import Microphone from "../imagenes/microphone.svg";
import More from "../imagenes/more.svg";
import Twitter from "../imagenes/twitter.svg";

export default function Discover() {
    return (

        //contenedor padre //
        <section className ="Discover-P" style={{backgroundColor:"#302e33a",display:"flex",justifyContent : "center", gap: "5%",paddingTop :"10%",paddingBottom:"10%"}} > 
 
         
                <Box style ={{flexDirection:"column"}}>
                
                <Typography variant="h1" style={{fontFamily :"Poppins",fontSize: "3.5rem"}}>Discover new Music</Typography>
                 
                <Box style ={{display:"flex",alignItems :"center"  }}>
             
                        <Button style={{display:"flex",flexDirection:"column", gap:"15px" ,backgroundColor: "#202027", marginRight:"15px"}}>
                            <img src={Microphone} alt="Microphone"style= {{width:"2.5rem"}}/>
                            <Typography variant="body2" style={{fontFamily: "Poppins", fontSize: "1rem", color: "#FFFFFD", textTransform: "capitalize"}}> Charts</Typography> </Button> 
                        
                        <Button style={{display:"flex",flexDirection:"column", gap:"15px" ,backgroundColor: "#202027",height:"2.5 rem" ,width:"2.5rem", marginRight:"15px"}}>
                            <img src={More} alt="More"style ={{width:"2.5rem"}}/>
                            <Typography variant="body2" style={{fontFamily: "Poppins", fontSize: "1rem", color: "#FFFFFD", textTransform: "capitalize"}}>Albums</Typography> </Button> 
                        
                        <Button style={{display:"flex",flexDirection:"column", gap:"15px" ,marginRight:"15px",backgroundColor: "#202027"}}>
                            <img src={Twitter} alt="Twitter"style ={{width:"2.5rem"}}/>
                            <Typography variant="body2" style={{fontFamily: "Poppins", fontSize: "1rem", color: "#FFFFFD", textTransform: "capitalize"}}> More</Typography> </Button>  
                    </Box>
                
                    <Typography variant ="body"paragraph color ="#FFFFFD"style={{fontFamily :"Poppins",fontSize: "1.2rem",fontWeigth:"300",paddingTop:"3%"}}>  By joing you can benefit by listening to the lates albums released.</Typography> 

                </Box>

            <Box style={{ width:"25%"  }}>
                <img src={Covers} alt="Cover" style={{ width:"70%" }}/>
            </Box>
            
            </section>
          
        
        
    );
}

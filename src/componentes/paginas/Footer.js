import React from "react";
import {Button,Box,TableFooter} from "@mui/material";
import Fb from '../imagenes/facebook.svg';
import Tw from '../imagenes/twitter.svg';


export default function Footer (){
    return(
        <TableFooter style ={{background:"#202027",display:"flex",justifycontent :"SpaceAround", marginTop:"100px"}}>
            <Box style={{display:"flex",gap:"3rem"}}>
                <Button style ={{color:"white",backgroundColor:"transparent",fontWeeigth:"400",fontSize: "1.1rem",textTransform:"capitalize"}}>About Us</Button>
                <Button style ={{color:"white",backgroundColor:"transparent",fontWeeigth:"400",fontSize: "1.1rem",textTransform:"capitalize"}}>Contact</Button>
            </Box>
            <Box>
                <Button style ={{color:"white",backgroundColor:"transaparent",fontFamily:"Poppins",fontWeight:"400",fontSize:"1.1rem",textTransform:"capitalize"}}>
                <img src={Tw} alt="Twitter" style={{paddingRight:"0.5rem"}}/>Twitter</Button>
                <Button style ={{color:"white",backgroundColor:"transaparent",fontFamily:"Poppins",fontWeight:"400",fontSize:"1.1rem",textTransform:"capitalize"}}>
                <img src={Fb} alt="Twitter" style={{paddingRight:"0.5rem"}}/>Facebook</Button>
            
            </Box>
        </TableFooter>
    )
}
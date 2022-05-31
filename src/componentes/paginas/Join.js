import React from "react";
import {Button,Box,TextField,Typography} from "@mui/material";

export default function Join (){
    return(
          
            <section id='Join-P' className="Join" style={{ backgroundColor: "#302e3a", display: "flex", justifycontent: "center", alignItems: "center", paddingTop: "10%" }}>
        <>  
            <div className="circle4"></div>
            <div className="circle5"></div>
            
            <Box style={{ display: "flex", gap: "20px" }}>
                <Typography variant="h1" paragraph color="#FFFFFD" style={{ fontFamily: "Poppins", fontWeight: "600", marginRight: "8rem" }}>Join the<span style={{ color: "#d3007b" }}>fun.</span></Typography>
            </Box>
            <Box style={{ backgroundColor: "#202027", padding: "3rem", borderRadius: "5%", paddingLeft: "5rem",marginTop:"7rem" }}>
                <>
                    <Typography variant="body1" paragraph color="#FFFFFF" style={{ fontFamily: "Poppins" }}>Name:</Typography>
                    <TextField variant="outlined" size="small" style={{ width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBotton: "1.5rem", color: "white" }} />
                </>

                <>
                    <Typography variant="body1" paragraph color="#FFFFFF" style={{ fontFamily: "Poppins" }}>Email:</Typography>
                    <TextField variant="outlined" size="small" style={{ width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBotton: "1.5rem" , color: "white" }} />
                </>

                <>
                    <Typography variant="body1" paragraph color="#FFFFFF" style={{ fontFamily: "Poppins" }}>Password:</Typography>
                    <TextField variant="outlined" size="small" style={{ width: "20rem", border: "2px solid #4853ab", borderRadius: "5px", marginBotton: "1.5rem", color: "white" }} />
                </>
                <>
                    <br/>
                    <br/>
                    <Button style={{ color: "white", backgroundColor: "#4853ab", width: "20rem", fontFamily: "Poppins", fontWeight: "400", fontSize: "0.8rem", textTransform: "capitalize"}}>Join Now</Button>
                </>
            </Box>
            </>
        </section>
    )
}


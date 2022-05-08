import React from 'react';
import webdev from "../../image/bluebg.jpg"
import Onepage from "./Onepage"

const Features = () => {
  return (
    <>
    
    <div className='container-fluid'>
        <h1 style={{color:"rgb(1, 153, 52)",textAlign:"center"}}>Our Features & Services</h1>

        <div className=''>

        <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img style={{width:"300px",height:"300px",borderRadius:"50%"}} src={webdev} alt="" />
         <p  style={{position:"absolute",top:"0" ,textAlign:"center",transform:"translateY(50%)"}}><span style={{backgroundColor:"yellow",padding:"5px",fontWeight:"bold",fontSize:"25px"}}>WEB</span> <span style={{display:"block",backgroundColor:"black",color:"white",padding:"5px",fontWeight:"bold",fontSize:"25px"}}> DEVLOPMENT </span><span style={{display:"block",backgroundColor:"white",padding:"5px",fontWeight:"bold",fontSize:"25px"}}>SERVICES</span></p>
        </div>
         
      
          </div>

    </div>
    
  <div className='featuresec'>

    <div className='fecsec1'>

    <h3>ONE PAGE WEBSITE</h3>

    <h5>Pricing</h5>
    <p style={{marginBottom:"50px",fontSize:"30px"}}>Rs. 299/</p>

    <p>Responsive Design</p>
    <p>2 Page</p>
    <p>Social Media Icons</p>
    <p>Design Customization</p>
    <a href="">
      <button>example</button>
    </a>
    </div>

  </div>
    </>
  )
}

export default Features
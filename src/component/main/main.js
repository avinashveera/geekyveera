import React from 'react'
import Card from './Card'
import About from './about'
import "./Main.css"
import Webimage from "../../image/webdevlopment.png" 
import { Slider } from './Slider';
import Digimage from "../../image/digital marketing.png" 
import Servimg from "../../image/service.png"
import Ourprocess from './Ourprocess'
import Soft from "../../image/soft.png"

export const Main = () => {
  return (
   <>
   
   <Slider/>

    <About/>  
   
   <div className='container'>

       <div style={{display:"flex",justifyContent:"center"}}>
         <img style={{height:"300px",width:"300px"}} src={Servimg} alt="img" />
       </div>
       <p className='my-4' style={{textAlign:"center",fontSize:"25px"}}>Services</p>
       <div className='row mx-auto'>
 
<Card
      
       
        title="Website Devlopment"
        image={Webimage}
        text=" Every successful business starts with a great website and we deliver you the same.
         Designing a great website requires skills and creative insights and
          we have it both that turns your visual image into virtual reality."
        />

<Card
        
        title="Degital Marketing"
        image={Digimage}
        text=" veera software as one of the leading Digital Marketing Agency in Delhi believes
         that the internet has the power to business but not telling anyone, 
                which has no worth. Before you get started with digital marketing have
         a glance at most of its common type used by a number of digital experts. "
        />
        
        <Card
        
        title="Seo Analysis"
        image={Webimage}
        text="Digital marketing, also called online marketing, 
        is the promotion of brands to connect with potential customers using the internet and other
         forms of digital communication. This includes not only email, social media, 
         and web-based advertising, but also text and multimedia messages as a marketing channel."
         />






       </div> 

   </div>
<div className='container-fluid'>
  <img style={{width:"100vw"}} src={Soft} alt=''/>
</div>
  

  <Ourprocess />
 
   </>
  )
}

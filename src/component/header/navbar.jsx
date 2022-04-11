import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/veerasoft.png"

export const Navbar = (props) => {



    const shownav=()=>{

       const hdnav= document.getElementsByClassName("hidenav")
       
       if(hdnav[0].style.display==="none")
      {
        hdnav[0].style.display="block";

      }else{
        hdnav[0].style.display="none";

      }
    }
    return (  

        <>
             <div className='customnavbar'>

               <div className='navlogo' style={{height:"100%"}}>
                   
               <Link  to="/"><img style={{height:"40px",width:"50vw",overflow:"hidden"}} src={logo} alt="" srcset="" /></Link>


               </div>    
               {/* comment */}


                  <div className='navlinks' style={{width:"100%",height:"100%"}} >

                  <i onClick={shownav}  style={{color:"white",fontSize:"35px",position:"absolute",right:"20px",top:"5px",padding:"0px 10px"}} className="fa-solid fa-bars"></i>

                   <div className="hidenav" style={{display:"none"}}>

                   

                  <ul  style={{marginTop:"5px", marginRight:"20px",display:"flex",alignItems:"center",justifyContent:"right"}} onClick={shownav}>
                            <li>
                                <Link className="navli"to="/">Home</Link>
                            </li>

                            <li>
                                <Link className="navli" to="/about">About</Link>
                            </li>

                            <li>
                                <Link className="navli" to="/services">Services</Link>
                            </li>

                        </ul>

                        </div>

                  </div>
 

              {/* comment */}
         {/* contact with whatsapp */}

            <div className='whatsappfix'>

                <a href='https://wa.me/7991106305?text=hello veera software'><i className="fa-brands fa-whatsapp"></i></a>
               
               </div>

               <div className='feebback'>
         
               <i onClick={props.showfc} className="fa-solid fa-star-half-stroke"></i>
            
              </div>





        </div>

        </>
    )
}

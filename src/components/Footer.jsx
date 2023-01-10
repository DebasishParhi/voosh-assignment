import React from 'react'
import "./header.css"
import {useState} from "react"

function Footer() {

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const setdata=()=>{
        localStorage.setItem("email",email)
        localStorage.setItem("pass",pass)
    }

    const check=()=>{
        let e=localStorage.getItem("email")
        let p=localStorage.getItem("pass")
        if(email===e && pass===p){
            alert("User alredy login")
        }
        else{
            alert("please login")
        }
    }

  return (
    <div className='footermain' >
      <div className='footer' style={{position:"relative"}}>


      <div  style={{position:"absolute",top:"50px",display:"flex",width:"100%",justifyContent:"space-around"}}>
        <div style={{color:"white",fontSize:"20px",marginTop:"14%"}}>Book A Demo</div>

          <div className='register'>
           <label style={{marginTop:"5%",marginLeft:"0"}} htmlFor="" autoComplete='off'>Email</label><br />

           <input style={{marginLeft:"2%"}} onChange={(e)=>{setEmail(e.target.value)}} type="email" autoComplete='off' /><br />

           <label htmlFor="">Password</label><br />

            <input style={{marginLeft:"2%"}}  onChange={(e)=>{setPass(e.target.value)}} type="password"autoComplete='off' /><br />

            <button style={{marginTop:"5%",backgroundColor:"blue", color:"white"}} onClick={setdata}>Book Demo</button>

            <button style={{marginTop:"5%",backgroundColor:"blue", color:"white",marginLeft:"2%"}} onClick={check}>Refresh</button>

           </div>
         </div>
          </div>
      
    </div>
  )
}

export default Footer

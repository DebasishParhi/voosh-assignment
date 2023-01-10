import React from 'react'
import "./header.css"

function Header() {

    // const handlescroll=()=>{
    //     window.scroll({
    //         top:document.body.offsetHeight,
    //         left:0,
    //         behavior:'smooth'
    //     })
    // }
  return (
    <>
    <div className='upper'>
        <div>
          <img className='imgtwo' src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp" alt="" />
        </div>
        <span className='para'>Consolidate your restaurants' insights in <br /> </span> <span className='para'>one place. Unlock growth.</span>
         <p className='para2'>Your one stop solution to view mission-critical data and insights from <br /> all your locations in one place.</p> 
         
         <button type='button'  className='btn'><a href="#register">BookDemo</a></button>

         <div>
         <img className='arrowimg' src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp" alt="" />

         </div>
       <div className='header'>
         <img className='imgone' src="https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp" alt="" />
          
          <img  className='imgthree' src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp" alt="" />
      </div>
    </div>
    


 

</>
  )
}

export default Header

import React from 'react'
import "./header.css"

function Header() {

   
  return (
    <>
    <div className='upper'>
        <div>
          <img className='imgtwo' src="https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp" alt="" />
        </div>
        <span className='para'>Consolidate your restaurants' insights in <br /> </span> <span className='para'>one place. Unlock growth.</span>

         <p className='para2'>Your one stop solution to view mission-critical data and insights from <br /> all your locations in one place.</p> 

         <div style={{display:"flex"}}>
<button type='button'  className='btn'><a style={{color:"white"}} href="#register">BookDemo</a></button>

<img className='amazomimg' src="https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp" alt="" />

</div>


         <div>
         <img className='arrowimg' src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp" alt="" />


         </div>
         <img className='swigyimg' src="https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp"
          alt="" />
          <img className='zomatoimg' src="https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp" alt="" />

       <div className='header'>
         <img className='imgone' src="https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp" alt="" />
          
          <img  className='imgthree' src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp" alt="" />
      </div>
    </div>
    


 

</>
  )
}

export default Header

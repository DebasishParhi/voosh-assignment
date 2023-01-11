import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';


function App() {


   useEffect(()=>{
  const email= localStorage.getItem("email")
    const pass= localStorage.getItem("pass")
    if(email!=undefined && pass!=undefined){
      alert(`${email} alredy login`)
      
    }
    else{
      alert("you need to login")
    }

   },[])

   

  return (
    <div className="App">
      <Header/>
      <Footer/>
      
      
      
      
      
    </div>
  );
}

export default App;

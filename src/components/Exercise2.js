
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Practise from './components/Practise';
// import SpeechToText from './components/SpeechToText';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const[btntext, setbtntext] = useState("Enable Dark Mode");
  const[mode, setMode] = useState('light');
  const[alert, setalert] = useState(null);

  

  const showAlert = (message, type) =>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setalert(null);
    },3000);
  }


  /////////////******This is for color palates*********/

  const removeBodyClasses= () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);   
    }

  return (
    <>   
    <Navbar title="Aasha" home="Tara Home" mode={mode} btntext={btntext} toggleMode = {toggleMode}/>
    <Alert alert={alert}/> 
    <p style={{color:mode==='dark'?'white':'black'}}>Hello World</p>

    {/* <Textform heading="This is our heading"><wzy6g/Textform> */}
    <TextForm heading="This is our heading" mode={mode} showAlert={showAlert}></TextForm>
    {/* <Practise></Practise> */}
    {/* <SpeechToText></SpeechToText> */}
    {/* <About></About> */}
    
</>
  );
}

export default App;

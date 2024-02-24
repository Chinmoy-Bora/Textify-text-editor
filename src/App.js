
import './App.css';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App(props) {

 const[mode,setmode]=useState('light')

 const[alert,setAlert]=useState(null)

 const showAlert=(message,type)=>
 {
        setAlert(
          {
            msg  :message ,
            type : type

          }
        )

        setTimeout(() => {
          setAlert(null)
        },1000);
 }

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');

      document.body.style.backgroundColor = '#013d83';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* Navbar implimentation */}

      <Navbar title='Textutils' home='Home' contact='About' mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>
      {/*Text form implimentation  */}

      <div className="container my-3" >
        <TextForm heading="Enter your text" mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />
      </div>

      {/* Accordia implimentation */}

      {/* <div className="container">
    <About/>
    </div>
     */}




    </>
  );
}

export default App;

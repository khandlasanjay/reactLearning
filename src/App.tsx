import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  const [mode, setMode] = useState("light")

  const enableDarkMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" About="About" mode= {mode} enableDarkMode = {enableDarkMode}/>
      <Text title="Enter Your Text" mode= {mode}/>
    </>
  );  
}

export default App;

import './CSS/App.css'
import Header from './Header'
import { ModeContext, ModeProvider } from './ModeContext';
import yoda from "./ASSETS/yoda.jpeg";
import groot from "./ASSETS/groot.jpeg";
import minnion from "./ASSETS/minnion.jpeg";
import dothraki from "./ASSETS/dothraki.jpeg";
import { useContext, useEffect } from 'react';

function App() {
  
  const {Mode, setMode} = useContext(ModeContext);
  useEffect(()=>{
    console.log(Mode);
  },[Mode])

  return (
    <ModeProvider>
    <div className="App" style={{backgroundImage:'url('+ Mode +')'}}>
      <Header/>
    </div>
    </ModeProvider>
  )
}

export default App

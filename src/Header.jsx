import { useContext, useEffect } from 'react';
import './CSS/Header.css';
import { ModeContext } from './ModeContext';
import yoda from "./ASSETS/yoda.jpeg";
import groot from "./ASSETS/groot.jpeg";
import minnion from "./ASSETS/minnion.jpeg";
import dothraki from "./ASSETS/dothraki.jpeg";

const Header = ()=>{
    const {Mode,setMode} = useContext(ModeContext);
    const ModeChanged = (e)=>{
        let selected = e.target.innerHTML;
        console.log(selected);
        switch(selected)
        {
            case "Minnion":
                setMode(minnion);
                break;
            case "Yoda":
                setMode(yoda);
                break;
            case "Groot":
                setMode(groot);
                break;
            case "Dothraki":
                setMode(dothraki);
                break;
        }
        // console.log(Mode);
    }
    useEffect(()=>{
        console.log(Mode);
    },[Mode])
    return(
        <div className="header">
            <h2 className="title">
                Translator
            </h2>
            <div className="navigs" onClick={(e)=>{ModeChanged(e)}}>
                <p className="navig">Minnion</p>
                <p className="navig">Yoda</p>
                <p className="navig">Groot</p>
                <p className="navig">Dothraki</p>
            </div>
        </div>
    );
}
export default Header;
import { createContext, useState } from "react";
import minnion from "./ASSETS/minnion.jpeg";

export const ModeContext = createContext("");

export const ModeProvider = props => {
    const [Mode,setMode] = useState(minnion);
    return(
        <ModeContext.Provider value={{Mode,setMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}
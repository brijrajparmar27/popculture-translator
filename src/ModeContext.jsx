import { createContext, useState } from "react";
import minion from "./ASSETS/minion.jpeg";

export const ModeContext = createContext("");

export const ModeProvider = props => {
    const [Mode,setMode] = useState(minion);
    return(
        <ModeContext.Provider value={{Mode,setMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}
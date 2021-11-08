import { useContext } from "react";
import Body from "./Body";
import Header from "./Header";
import { ModeContext } from "./ModeContext";

const Home = ()=>{
    const {Mode} = useContext(ModeContext);
    return(
        <div className="App" style={{backgroundImage:'url('+ Mode +')'}}>
            <Header/>
            <Body/>
        </div>
    );
}

export default Home;
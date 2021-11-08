import './CSS/App.css'
import { ModeProvider } from './ModeContext';
import Home from './Home';

function App() {

  return (
    <ModeProvider>
      <Home/>
    </ModeProvider>
  )
}

export default App;
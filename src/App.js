import Home from "./Screens/Home";
import { useState } from "react";


function App() {
  const [theme,setTheme] = useState('light')
  return (
    <div className=""> 
    <Home theme={theme} setTheme={setTheme}/>
     
    </div>
  );
}

export default App;

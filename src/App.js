import { useState } from "react";
import "./App.css";
import Tooltipcomponent from "./components/Tooltip";

function App() {
  // Here is my tooltip direction set by default "right"
  //Which is pass in Tooltipcomponent by props
  const [tooltipdirection, setTooltipdirection] = useState("right");
  
  return (
    <div className="App">
      <div className="container">
        {/* Here is my onclick function for set tooltip direction....If i click first button then direction will be top if i click second button then direction will be left....that direction pass by props */}
        <button className="button" onClick={()=>{setTooltipdirection("top")}}>Top</button>
        <button className="button" onClick={()=>{setTooltipdirection("left")}}>Left</button>
        <button className="button" onClick={()=>{setTooltipdirection("bottom")}}>Buttom</button>
        <button className="button" onClick={()=>{setTooltipdirection("right")}}>Right</button>
      </div>
      {/* Here is my Tooltipcomponent */}
      <Tooltipcomponent tooltipdirection={tooltipdirection}/>
    </div>
  );
}

export default App;

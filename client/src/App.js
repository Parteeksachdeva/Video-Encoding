import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import FileUpload from "./components/FileUpload";

function App() {
  const [clickedVideo,setClickedVideo] = useState("https://www.youtube.com/embed/uilkmUoXoLU");
  const [convertCompleted,setConvertCompleted] =useState(false)

  return (
    <div className="app">
     <FileUpload clickedVideo={clickedVideo} setConvertCompleted={setConvertCompleted}/>
     <Body setClickedVideo={setClickedVideo} convertCompleted={convertCompleted}/>
    </div>
   );
 }

export default App;

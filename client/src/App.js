import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import FileUpload from "./components/FileUpload";

function App() {
  const [clickedVideo,setClickedVideo] = useState("https://www.youtube.com/embed/uilkmUoXoLU");

  return (
    <div className="app">
     <FileUpload clickedVideo={clickedVideo}/>
     <Body setClickedVideo={setClickedVideo}/>
    </div>
   );
 }

export default App;

import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import FileUpload from "./components/FileUpload";

function App() {
  const [clickedVideo,setClickedVideo] = useState("https://www.youtube.com/embed/NzBuOXzZtvo");
  const [styleClicked,setStyleClicked] =useState(false)

  return (
    <div className="app">
     <FileUpload clickedVideo={clickedVideo} styleClicked={styleClicked}/>
     <Body setClickedVideo={setClickedVideo} setStyleClicked={setStyleClicked} styleClicked={styleClicked}/>
    </div>
   );
 }

export default App;

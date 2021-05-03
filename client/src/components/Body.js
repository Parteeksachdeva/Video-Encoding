import React,{useState,useEffect} from 'react'
import "./Body.css"
import Video from './Video';
// import MenuIcon from '@material-ui/icons/Menu';
import { FiMenu } from 'react-icons/fi'

function Body({setClickedVideo,setStyleClicked,styleClicked}) {
    const [thumbnail, setThumbnail] = useState([])
    useEffect(() => {
       setThumbnail(importAll(require.context('../../../server/public/uploads', false, /\.(png|jpe?g|svg)$/)));
    }, [])
    function importAll(r) {
        return r.keys().map(r);
      }
      const videos = importAll(require.context('../../../server', false, /\.(mp4)$/));
      
      
    return (
        <div className="body">
            <div className="body__transparent"></div>
            <div className="body__btn" onClick={()=>{setStyleClicked(!styleClicked)}}>
               <FiMenu size={30} color={"white"}/>
            </div>
            <div className="body__body">
             {videos.map((value,i)=>{
                 console.log(thumbnail[i]?.default)
                return <Video key={i} value={value} setClickedVideo={setClickedVideo} thumbnail={thumbnail[i]?.default}/>
             })}
            </div>
        </div>
    )
}

export default Body

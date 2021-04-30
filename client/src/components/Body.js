import React,{useEffect,useState} from 'react'
import "./Body.css"
import Video from './Video';

function Body({setClickedVideo,convertCompleted}) {
    const [videos, setVideos] = useState([])
    function importAll(r) {
        return r.keys().map(r);
      }
      useEffect(() => {
        setVideos(importAll(require.context('../../../server', false, /\.(mp4)$/))); 
      }, [convertCompleted])
      
      //const thumbnails = importAll(require.context('../../public/uplouds', false, /\.(mp4)$/));
      //console.log(videos)
    return (
        <div className="body">
            <div className="body__body">
             {videos.map((value,i)=>(
                <Video key={i} value={value} setClickedVideo={setClickedVideo}/>
            ))}
            </div>
        </div>
    )
}

export default Body

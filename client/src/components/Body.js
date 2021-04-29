import React from 'react'
import "./Body.css"
import Video from './Video';

function Body({setClickedVideo}) {

    function importAll(r) {
        return r.keys().map(r);
      }
      const videos = importAll(require.context('../../../server', false, /\.(mp4)$/));
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

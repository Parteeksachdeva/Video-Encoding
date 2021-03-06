import React,{useState} from 'react'
import Loading from './Loading'
import "./Video.css"
function Video({value,setClickedVideo,thumbnail}) {

    const [isLoaded, setIsLoaded] = useState(false)
    const [Duration, setDuration] = useState()
    const over=(e)=>{
        try{
            e.currentTarget.currentTime=e.target.duration/2
            setDuration(e.target.duration/2);
            e.currentTarget.play()
            .then(value=>console.log(value))
            .catch(err=>console.log(err))
        }
        catch(err){console.log(err)}
            
    }
    const out=(e)=>{
        try{
            e.currentTarget.currentTime=Duration
            e.currentTarget.pause()
            
        }
        catch(err){console.log(err)}
    }
    return (
        
        <div className="video" onClick={()=>{setClickedVideo(value.default)}}>
           
           
            {isLoaded ? <img src={thumbnail} alt="" /> : <Loading />}
            <video onLoadedData={()=>{setIsLoaded(true)
            }} width="200" height="160" onMouseOver={over} onMouseOut={out} autoPlay={false} loop={true} pause="" muted>
                <source src={value.default} type="video/mp4"/>
            </video>
            
        </div>
    )
}

export default Video

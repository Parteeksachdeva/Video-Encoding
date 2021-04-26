import React,{useState} from 'react'
import "./Video.css"
function Video({value}) {

    const [isLoaded, setIsLoaded] = useState(false)
    const over=(e)=>{
        try{
            e.currentTarget.play()
            .then(value=>console.log(value))
            .catch(err=>console.log(err))
        }
        catch(err){console.log(err)}
            
    }
    const out=(e)=>{
        try{
            e.currentTarget.currentTime=0
            e.currentTarget.pause()
        }
        catch(err){console.log(err)}
    }
    return (
        
        <div className="video">
            {isLoaded ? <img src="https://stilearning.com/vision/assets/globals/img/dummy/img-10.jpg" alt="" /> : "wait"}
            <video onLoadedData={()=>{
                 setIsLoaded(true)
            }} width="200" height="160" onMouseOver={over} onMouseOut={out} autoPlay={false} loop={true} pause="" muted>
                <source src={value.default} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video

import React from 'react'
import "./Video.css"
function Video({value}) {
    const over=(e)=>{
        try{
            e.currentTarget.play()
            console.log(e.currentTarget)
        }
        catch(err){console.log(err)}
            
    }
    const out=(e)=>{
        try{
            e.currentTarget.currentTime=0
            e.currentTarget.pause()
            console.log(e.currentTarget)
        }
        catch(err){console.log(err)}
    }
    return (
        
        <div className="video">
            <img src="https://stilearning.com/vision/assets/globals/img/dummy/img-10.jpg" alt="" />
            <video  width="200" height="160" onMouseOver={over} onMouseOut={out} autoPlay={false} loop={true} pause="">
                <source src={value.default} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Video

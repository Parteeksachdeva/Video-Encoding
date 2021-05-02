import React,{useState} from 'react'
import "./FileUpload.css"
import axios from "axios"

function FileUpload({clickedVideo,setConvertCompleted}) {
    const [videos,setVideos] = useState()
    const [thumbnail,setThumbnail] = useState()
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [resVideo, setresVideo] = useState()
    
    const handleVideos=(e)=>{
        setVideos(e.target.files[0])
    }
    const handleThumbnail=(e)=>{
        setThumbnail(e.target.files[0])
    }
    const onSubmit=async (e)=>{
        e.preventDefault()
        let data = new FormData();
        // console.log(videos)
        data.append('file',videos)

        try{
            const res=await axios.post('/upload',data,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                      parseInt(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                      )
                    );
          
                    // Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000);
                  }
                  
            })
            
             setresVideo(res)
           
            let dataImage = new FormData();
            dataImage.append('file',thumbnail)
            
            try{
                const res=await axios.post('/uploadImage',dataImage,{
                        headers:{
                            'Content-Type' : 'multipart/form-data'
                        }
                    })
                }
                catch(err){
                    console.log(err)
                }
                window.location.reload();
        }
        catch(err){
            console.log(err)
        }
        
    }
    return (
        <div className="file">
            <div className="file__preview">
            <div className="preview__video">
            <iframe src={clickedVideo} width="320" height="200"></iframe>
            <img src="https://cdn.worldvectorlogo.com/logos/watermark.svg" alt="WaterMark" />
            </div>
            <div className="file__progress">
                <div className="file__progressBar">
                    <div className="progressBar__percentage" style={{"width": `${uploadPercentage}%`}}>
                        {uploadPercentage}%
                    </div>
                </div>
            </div>
            </div>
            <div className="file__form">
                <form onSubmit={onSubmit}>
                <div>
                <label> Choose Video </label>
                <input type='file' accept="video/mp4,video/x-m4v,video/*" onChange={handleVideos}/>
                </div>
                <div>
                <label>Choose Thumbnail</label>
                <input type='file' accept="image/x-png,image/gif,image/jpeg" onChange={handleThumbnail}/>
                </div>
                <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default FileUpload

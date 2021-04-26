import React,{useState} from 'react'
import "./FileUpload.css"
import axios from "axios"

function FileUpload() {
    const [videos,setVideos] = useState()
    const [thumbnail,setThumbnail] = useState()
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const handleVideos=(e)=>{
        setVideos(e.target.files[0])
    }
    const handleThumbnail=(e)=>{
        setThumbnail(e.target.files[0])
    }
    const onSubmit=async (e)=>{
        e.preventDefault()
        let data = new FormData();
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
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className="file">
            <div className="file__preview">
            <div className="preview__video">
            <video width="320" height="240" controls>
                <source src={videos} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {uploadPercentage}
            </div>
            <div></div>
            <div></div>
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

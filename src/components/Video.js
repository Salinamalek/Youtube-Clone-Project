import YouTube from "react-youtube"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneVideo } from "../api/fetch"
import ErrorMessage from "./ErrorMessage"

export default function Video() {
    const [video, setVideo] = useState({})
    const [loadingError, setLoadingError] = useState(false)
    const videosId = useParams()

    useEffect(() => {
        getOneVideo(videosId.id)
        .then(res => {
            setVideo(res)
            setLoadingError(false)
          })
          .catch((error) => {
            console.log(error)
            setLoadingError(true)
        })
    }, [videosId])
   
    return (
        <div className="video">
        <YouTube videoId={videosId}/>
        <h1>{video.items ? video.items[0].snippet.title : "loading..."}</h1>
        </div> 
    )
}
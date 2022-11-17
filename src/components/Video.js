import YouTube from "react-youtube"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneVideo } from "../api/fetch"
import ErrorMessage from "./ErrorMessage"

export default function Video() {
    const [video, setVideo] = useState([])
    const [loadingError, setLoadingError] = useState(false)

    const videoId = useParams()

    useEffect(() => {
        getOneVideo(videoId.id)
        .then(res => {
            setVideo(res)
            setLoadingError(false)
          })
          .catch((error) => {
            console.log(error)
            setLoadingError(true)
        })
    }, [videoId])
    console.log(video)
    console.log(videoId.id)
    return (
        <h1>{video.items.snippet.title}</h1>
    )
}
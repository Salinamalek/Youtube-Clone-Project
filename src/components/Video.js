import YouTube from "react-youtube"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getOneVideo } from "../api/fetch"
import ErrorMessage from "./ErrorMessage"

export default function Video() {
    const [video, setVideo] = useState({})
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

    return (
        <div>
        <h1>Hello{video.items[0].snippet.title}</h1>
        </div>
    )
}
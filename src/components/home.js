import { useState, useEffect } from "react";

import { getPopularVideos } from "../api/fetch";

export default function Home() {
    const [loadingError, setLoadingError] = useState(false)
    const [popularVideos, setPopularVideos] = useState([])
    const [searchTitle, setSearchTitle] = useState("")

    function handleTextChange(e) {
        const title = e.target.value
        setSearchTitle(title)
    }

    useEffect(() => {
        getPopularVideos()
        .then(res => {
            setPopularVideos(res)
            setLoadingError(false)
        })
        .catch(err => {
            console.log(err)
            setLoadingError(true)
        })
    }, [])

    return (
        <section>
            <label htmlFor="searchTitle">
                Search
                <input
                type="text"
                value={searchTitle}
                id="searchTitle"
                onChange={handleTextChange}
                />
            </label>
            <section>
                {popularVideos.items.map((video) => {
                    return (
                         // this return will later be a video component
                        <div className="video" key={video.id}>
                    <h2>{video.snippet.title}</h2>
                    <img src={video.snippet.thumbnails.medium.url}/>
                    <h4>{video.snippet.channelTitle}</h4>
                    <p>{video.statistics.viewCount} views {video.snippet.publishedAt.slice(0, 10)}</p> 
                    </div>
                    // the p tag will later have the view count and date formatted correctly 
                    )
                })}
            </section>
        </section>
    );
  };
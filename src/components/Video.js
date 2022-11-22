import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneVideo } from "../api/fetch";
import ErrorMessage from "./ErrorMessage";
import CommentsForm from "./CommentsForm";
import ShowMore from "./ShowMore";
import "./Video.css";

export default function Video() {
  const [video, setVideo] = useState({});
  const [loadingError, setLoadingError] = useState(false);
  const videosId = useParams();
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  useEffect(() => {
    getOneVideo(videosId.id)
      .then((res) => {
        setVideo(res);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, [videosId]);

  return (
    <div>
      <div className="indVideo">
        <YouTube videoId={videosId.id} />
        <h1 className="vidTitle">
          {video.items ? video.items[0].snippet.title : "loading..."}
        </h1>
        <h3 className="vidChannel">
          {video.items ? video.items[0].snippet.channelTitle : "loading..."}
        </h3>
        <p className="vidViews">
          {video.items ? video.items[0].statistics.viewCount : "loading..."}{" "}
          Views
        </p>
        <p className="vidLikes">
          {video.items ? video.items[0].statistics.likeCount : "loading..."}{" "}
          Likes
        </p>
        {/* <p>{video.items ? video.items[0].snippet.description : "loading..."}</p> */}
        <button key={videosId} id="showMoreButton" onClick={toggleShowMore}>
          {!showMore ? "Show More ..." : "Show Less ..."}
        </button>
        {showMore && <ShowMore video={video} />}
      </div>
      <div className="commentsForm">
        <CommentsForm />
      </div>
    </div>
  );
}

import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneVideo, getRelatedVideos } from "../api/fetch";
import ErrorMessage from "./ErrorMessage";
import CommentsForm from "./CommentsForm";
import ShowMore from "./ShowMore";
import "./Video.css";
import Preview from "./Preview";

export default function Video() {
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
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

    getRelatedVideos(videosId.id)
      .then((results) => {
        setRelatedVideos(results);
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
        <button key={videosId} id="showMoreButton" onClick={toggleShowMore}>
          {!showMore ? "Show More ..." : "Show Less ..."}
        </button>
        {showMore && <ShowMore video={video} />}
      </div>
      <section className="relatedVids">
        <h2 className="relVids">Related Videos</h2>
        {relatedVideos.items &&
          relatedVideos.items.map((video) => {
            return <Preview video={video} key={video.etag} />;
          })}
      </section>
      <div className="commentsForm">
        <CommentsForm />
      </div>
    </div>
  );
}

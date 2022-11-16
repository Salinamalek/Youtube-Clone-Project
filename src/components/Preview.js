import { Link } from "react-router-dom";

export default function Preview({ video }) {
  return (
    <div className="video">
      <h2>
        <Link to={`/${video.id.videoId}`}> {video.snippet.title} </Link>
      </h2>
      <img src={video.snippet.thumbnails.medium.url} />
      <h4>{video.snippet.channelTitle}</h4>
      <p>
        {/* {video.statistics.viewCount} views{" "} */}
        {video.snippet.publishedAt.slice(0, 10)}
      </p>
    </div>
    // the p tag will later have the view count and date formatted correctly
  );
}

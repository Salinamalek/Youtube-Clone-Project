import { Link } from "react-router-dom";
import "./Video.css";

export default function Preview({ video }) {
  return (
    <div className="video">
      <Link to={`/video/${video.id.videoId}`}>
        <h2>{video.snippet.title}</h2>
        <img src={video.snippet.thumbnails.medium.url} />
      </Link>
      <h4>{video.snippet.channelTitle}</h4>
      <p>
        {video.snippet.publishedAt.slice(5, 7)}-
        {video.snippet.publishedAt.slice(8, 10)}-
        {video.snippet.publishedAt.slice(0, 4)}
      </p>
    </div>
  );
}

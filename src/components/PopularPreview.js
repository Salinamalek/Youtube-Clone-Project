import { Link } from "react-router-dom";

export default function PopularPreview({ video }) {
  return (
    <div className="video">
      <h2>
        <Link to={`/video/${video.id}`}>{video.snippet.title}</Link>
      </h2>
      <Link to={`/video/${video.id}`}>
        <img src={video.snippet.thumbnails.medium.url} />
      </Link>
      <h4>{video.snippet.channelTitle}</h4>
      {/* Stretch feature: Make channels clickable */}
      <p>
        {video.statistics.viewCount} views |{" "}
        {video.snippet.publishedAt.slice(0, 10)}
      </p>
    </div>
    // the p tag will later have the view count and date formatted correctly
  );
}
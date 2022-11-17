import Preview from "./Preview";
import { useLocation } from "react-router-dom";

export default function SearchResults({ searchVideos }) {
    // const location = useLocation()
    // const state = location.state
    // console.log(state)

    return (
        <section>
            {searchVideos.items &&
              searchVideos.items.map((video) => {
                return <Preview video={video} key={video.id.videoId} />;
              })}
          </section>
    )
}
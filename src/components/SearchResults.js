import Preview from "./Preview";
import { useLocation } from "react-router-dom";

export default function SearchResults({ searchVideos }) {


    return (
        <section>
            {searchVideos.items &&
              searchVideos.items.map((video) => {

                return <Preview video={video} key={video.etag} />;
              })}
          </section>
    )
}
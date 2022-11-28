import { useState, useEffect } from "react";

import { getPopularVideos } from "../api/fetch";

import PopularPreview from "./PopularPreview";
import Search from "./Search";
import ErrorMessage from "./ErrorMessage";

export default function Home({ popularVideos }) {
  const [loadingError, setLoadingError] = useState(false);

  return (
    <div className="homeVids">
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section>
          {popularVideos.items &&
            popularVideos.items.map((video) => {
              return <PopularPreview video={video} key={video.etag} />;
            })}
        </section>
      )}
    </div>
  );
}

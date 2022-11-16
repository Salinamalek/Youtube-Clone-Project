import { useState, useEffect } from "react";

import { getPopularVideos } from "../api/fetch";

import Preview from "./Preview";
import Search from "./Search";
import ErrorMessage from "./ErrorMessage";

export default function Home() {
  const [loadingError, setLoadingError] = useState(false);
  const [popularVideos, setPopularVideos] = useState([]);

//   useEffect(() => {
//     getPopularVideos()
//       .then((res) => {
//         setPopularVideos(res);
//         setLoadingError(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoadingError(true);
//       });
//   }, []);

  return (
    <section>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <div>
          <Search />
          {/* <section>
            {popularVideos.items &&
              popularVideos.items.map((video) => {
                return <Preview video={video} key={video.id.videoId} />;
              })}
          </section> */}
        </div>
      )}
    </section>
  );
}

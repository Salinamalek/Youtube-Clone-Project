import { useState, useEffect } from "react";

import { getPopularVideos } from "../api/fetch";

import Preview from "./Preview";
import ErrorMessage from "./ErrorMessage";

export default function Home() {
  const [loadingError, setLoadingError] = useState(false);
  const [popularVideos, setPopularVideos] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(e) {
    const title = e.target.value;
    setSearchTitle(title);
  }

  useEffect(() => {
    getPopularVideos()
      .then((res) => {
        setPopularVideos(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingError(true);
      });
  }, []);

  return (
    <section>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <div>
          <form>
            <label htmlFor="searchTitle">
              Search:
              <input
                type="text"
                value={searchTitle}
                id="searchTitle"
                onChange={handleTextChange}
              />
            </label>
            <button>Submit</button>
          </form>
          <section>
            {popularVideos.items &&
              popularVideos.items.map((video) => {
                return <Preview video={video} key={video.id} />;
              })}
            {/* causes ERROR ^ cannot read map in console */}
          </section>
        </div>
      )}
    </section>
  );
}

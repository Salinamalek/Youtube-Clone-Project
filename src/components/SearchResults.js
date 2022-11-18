import Preview from "./Preview";

export default function SearchResults({ searchVideos }) {

    return (
        <section>
            {searchVideos.items &&
              searchVideos.items.map((video) => {
                {console.log(video.etag)}
                return <Preview video={video} key={video.etag} />;
              })}
          </section>
    )
}
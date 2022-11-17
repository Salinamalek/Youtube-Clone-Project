import Preview from "./Preview";

export default function SearchResults({ searchVideos }) {
    return (
        <section>
            {searchVideos.items &&
              searchVideos.items.map((video) => {
                return <Preview video={video} key={video.id.videoId} />;
              })}
          </section>
    )
}
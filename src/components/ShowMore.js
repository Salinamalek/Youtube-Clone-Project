export default function ShowMore({ video }) {
  return (
    <div>
      <p>{video.items ? video.items[0].snippet.description : "loading..."}</p>
    </div>
  );
}

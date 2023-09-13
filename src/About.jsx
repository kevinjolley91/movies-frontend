import { Map, Marker } from "pigeon-maps";
import ReactPlayer from "react-player/youtube";

export function About() {
  return (
    <div>
      <h1>About Movies List</h1>
      <h2>The Better IMDB</h2>
      <Map height={300} defaultCenter={[41.3978, -79.8314]} defaultZoom={11}>
        <Marker width={50} anchor={[41.3978, -79.8314]} />
      </Map>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qEVUtrk8_B4&ab_channel=LionsgateMovies"
        volume="0.1"
        muted="false"
        playing="true"
        loop="true"
      />
    </div>
  );
}

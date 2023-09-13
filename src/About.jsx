import { Map, Marker } from "pigeon-maps";
import ReactPlayer from "react-player/youtube";

export function About() {
  return (
    <div>
      <h1>About</h1>
      <p>We accept donations in bacon.</p>
      <Map height={300} defaultCenter={[41.3978, -79.8314]} defaultZoom={11}>
        <Marker width={50} anchor={[41.3978, -79.8314]} />
      </Map>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        volume="0.1"
        muted="false"
        playing="true"
        loop="true"
      />
    </div>
  );
}

import { Map, Marker } from "pigeon-maps";

export function About() {
  return (
    <div>
      <h1>About What to Watch</h1>
      <h2>The Better IMDB</h2>
      <Map height={300} defaultCenter={[41.3978, -79.8314]} defaultZoom={11}>
        <Marker width={50} anchor={[41.3978, -79.8314]} />
      </Map>
    </div>
  );
}

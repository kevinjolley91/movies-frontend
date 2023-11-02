/* eslint-disable react/no-unescaped-entities */
import { Map, Marker } from "pigeon-maps";

export function About() {
  return (
    <div>
      <h1>About What to Watch</h1>
      <h2>
        We built What to Watch, so you don't have to wonder anymore. We're based in a small town shown on the map.
        There's practically nothing to do here, so we binge movies to fill our time. We know what to watch.
      </h2>
      <Map height={300} defaultCenter={[41.3978, -79.8314]} defaultZoom={11}>
        <Marker width={50} anchor={[41.3978, -79.8314]} />
      </Map>
    </div>
  );
}

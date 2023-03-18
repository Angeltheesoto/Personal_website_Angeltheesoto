// import Map, { NavigationControl, Marker, Layer } from "react-map-gl";
// import maplibregl from "maplibre-gl";
// import "maplibre-gl/dist/maplibre-gl.css";

interface Props {
  envData?: string;
}

export default function Map({ envData }: Props) {
  // const circleLayer = {
  //   id: "landuse_park",
  //   type: "circle",
  //   source: "earthquakes",
  //   longitude: -73.96676,
  //   latitude: 40.787155,
  //   paint: {
  //     "circle-color": "red",
  //     "circle-radius": 4,
  //     "circle-stroke-width": 1,
  //     "circle-stroke-color": "green",
  //   },
  // };

  // const myString = envData || "";
  // console.log(myString);

  return (
    <div className="map-container">
      <iframe
        title="myMap"
        width="100%"
        height="100%"
        src={`https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/?key=q4hzPQ0k9bKIF1srWkmD#9.6/40.73123/-73.93673`}
      ></iframe>
    </div>
  );

  // return (
  //   <div className="map-container">
  //     <Map
  //       mapLib={maplibregl}
  //       initialViewState={{
  //         longitude: -73.96676,
  //         latitude: 40.787155,
  //         zoom: 9,
  //       }}
  //       mapStyle={`https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/style.json?key=${key}`}
  //     >
  //       <NavigationControl position="top-left" />
  //       <Marker longitude={-73.99676} latitude={40.727155} color="red" />
  //       <Layer {...circleLayer} />
  //     </Map>
  //   </div>
  // );
}

import React, { useEffect, useState } from "react";

// import Map, { NavigationControl, Marker, Layer } from "react-map-gl";
// import maplibregl from "maplibre-gl";
// import "maplibre-gl/dist/maplibre-gl.css";

export default function Map({ envData }) {
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

  const [isLoading, setIsloading] = useState(false);
  const [mapKey, setMapKey] = useState();

  // // This lets us assign mapKey with the key data coming from app.js.
  let filterData = () => {
    try {
      setMapKey((prev) => (prev = envData));
      setIsloading((prev) => (prev = true));
    } catch (err) {
      console.log(`Error: `, err);
    }
  };

  useEffect(() => {
    filterData();
  }, []);

  const LoadMap = () => {
    if (!isLoading) {
      return (
        <div className="map-container">
          <div style={{ width: "100%", height: "100%" }}>Loading...</div>
        </div>
      );
    } else {
      return (
        <iframe
          width="100%"
          height="100%"
          src={`https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/?key=${mapKey}#9.4/40.
          74724/-73.92658`}
        ></iframe>
      );
    }
  };

  return (
    <div className="map-container">
      {/* <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: -73.96676,
          latitude: 40.787155,
          zoom: 9,
        }}
        mapStyle={`https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/style.json?key=${key}`}
      >
        <NavigationControl position="top-left" />
        <Marker longitude={-73.99676} latitude={40.727155} color="red" />
        <Layer {...circleLayer} />
      </Map> */}

      <LoadMap />
    </div>
  );
}

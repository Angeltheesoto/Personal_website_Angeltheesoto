import React, { useEffect, useState } from "react";
import Map, { NavigationControl, Marker, Layer } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MyMap() {
  const circleLayer = {
    id: "landuse_park",
    type: "circle",
    source: "earthquakes",
    longitude: -73.96676,
    latitude: 40.787155,
    paint: {
      "circle-color": "red",
      "circle-radius": 4,
      "circle-stroke-width": 1,
      "circle-stroke-color": "green",
    },
  };

  // basic map function
  // useEffect(() => {
  //   const key = "xZe8iMkEoxPig8xgKbR2";
  //   const map = new maplibregl.Map({
  //     container: "map", // container id
  //     style: `https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/style.json?key=${key}`, // style URL
  //     center: [-73.86676, 40.727155], // starting position [lng, lat]
  //     zoom: 9, // starting zoom
  //   });
  //   map.addControl(new maplibregl.NavigationControl(), "top-right");
  // });

  return (
    <div className="map-container">
      {/* <div id="map"></div> */}
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: -73.96676,
          latitude: 40.787155,
          zoom: 9,
        }}
        mapStyle="https://api.maptiler.com/maps/c409819f-850d-4d69-b2ad-5c95fdc642d8/style.json?key=xZe8iMkEoxPig8xgKbR2"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={-73.99676} latitude={40.727155} color="red" />
        <Layer {...circleLayer} />
      </Map>
    </div>
  );
}

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

  return (
    <div className="map-container">
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

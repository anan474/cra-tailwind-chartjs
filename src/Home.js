import React, { useState, useEffect, useContext } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Cards from "./components/cards";

// 1 : -0.060783, 109.344055
// 2 : -0.056249, 109.348753

const position1 = [-0.060783, 109.344055];
const position2 = [-0.056249, 109.348753];
const position = [-0.06078, 109.34405];
const zoom = 16;
const IndexPage = () => {
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position1}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Cards />
    </Map>
  );
};

export default IndexPage;

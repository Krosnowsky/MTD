import React, {Component} from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet"
import 'leaflet/dist/leaflet.css';

function GetIcon(_iconSize){
    return L.icon({
        iconUrl: require("../img/marker_MTDx2.png"),
        iconSize: 40 
    })
}


const Maps = () => {
    const position = [52.27638669837070, 21.512842669438523];
    return ( 
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} attributionControl={false}>
      
        <TileLayer
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
    />
        <Marker position={position} icon={GetIcon()}>

          <Popup>
            Fundacja Męska twarz depresji 
          </Popup>
        </Marker>
      </MapContainer> ); 
}
 
export default Maps;
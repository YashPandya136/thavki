import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { cn } from "../../lib/utils";
import "leaflet/dist/leaflet.css";
import { Link } from "gatsby";

const MyMarker = (props) => {
  const leafletRef = useRef();
  useEffect(() => {
    leafletRef.current.openPopup();
  }, []);

  return <Marker ref={leafletRef} {...props} />;
};

const CustomMap = ({ center, zoom, markerCustomIcon, className }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      className={cn("z-10", className)}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyMarker position={center} icon={markerCustomIcon}>
        <Popup>
          <div> B. K. Silk Mils Pvt.ltd</div>

          <Link
            to={`https://www.google.com/maps/dir/21.1879555,72.8433341/`}
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            Directions
          </Link>
        </Popup>
      </MyMarker>
    </MapContainer>
  );
};

export default CustomMap;

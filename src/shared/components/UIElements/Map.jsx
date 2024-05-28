import React, { useRef, useEffect } from "react";

import "./Map.css";
const Map = (props) => {
  // Ref
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    // useRef tell react where it should render the map
    // in this case it will render in the map div
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    //   Create a maker in the center of the map
    new window.google.maps.Marker({ position: props.center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;

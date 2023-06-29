import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-80.0, -22.0, 12],
        center: [ 0, -4],
        scale: 800
      }}
      style={{borderRadius:"30px"}}
    >
      <ZoomableGroup center={[76.3, 12.7]}>
      <Geographies
        geography="/features.json"
        fill="#0a0a0a80"
        stroke="#FFFFFF"
        strokeWidth={0.6}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[76.3, 12.7]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#282828e6",
          strokeWidth: 4,
          strokeLinecap: "round"
        }}
      >
        <text x="-6" textAnchor="end" alignmentBaseline="middle" fill="#28282899" style={{fontFamily:"monospace",fontSize:"32px"}}>
          {"Find me here!"}
        </text>
      </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;

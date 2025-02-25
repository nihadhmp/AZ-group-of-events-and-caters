import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import placeholder from "../assets/placeholder.png";

// Custom Marker Icon (Leaflet default icons may not appear)
// const customIcon = new L.Icon({
//   iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png", // Example icon
//   iconSize: [38, 38],
// });

const LeafletMapComponent = () => {
  const position = [10.887746, 76.073784]; // Coordinates for AZ GROUP Caters, Valanchery

  return (
    <div className="w-10/12 mr-20 mb-40  mt-6 pt-4 bg-white rounded-xl">
      <div className="flex pb-5 px-6">
        <img className="size-14 m-2 " src={placeholder} />
        <span>
          <h2 className="text-xl font-semibold font-sans  text-start text-black">
            Valanchery
          </h2>
          <p className="text-black font-sans text-xl">
            Valanchery - Nilambur Rd, Moonnakal, Valanchery, Pookkattiri, Kerala
            676552
          </p>
        </span>
      </div>
      <MapContainer
        center={position}
        zoom={12}
        className="h-[450px] rounded-b-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            <strong>AZ GROUP Caters</strong>
            <br />
            Valanchery - Nilambur Rd, Kerala 676552
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMapComponent;

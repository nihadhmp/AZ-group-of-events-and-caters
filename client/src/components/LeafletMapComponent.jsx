import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import placeholder from "../assets/placeholder.png";

// Custom Marker Icon
// const customIcon = new L.Icon({
//   iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
//   iconSize: [38, 38],
// });

// Array of locations
const locations = [
  {
    name: "Second Location",
    position: [10.9245, 76.1753],
    address:
      "Cherukara – Muthukurussi Rd, Kunnakkavu, Muthukurussi, Kerala 679340",
  },
];

const LeafletMapComponent = () => {
  return (
    <div className="w-10/12 mb-40 ml-20  mt-6 pt-4 bg-white rounded-xl ">
      <div className="flex pb-5 px-6">
        <img className="size-14 m-2 " src={placeholder} />
        <span>
          <h2 className="text-xl font-semibold font-sans  text-start text-black">
            Perinthalmanna
          </h2>
          <p className="text-black font-sans text-xl mr-3">
            Cherukara – Muthukurussi Road, Kunnakkavu, Muthukurussi, Kerala
            679340
          </p>
        </span>
      </div>
      <MapContainer
        center={[10.9061, 76.1245]} // Centered between the two locations
        zoom={12}
        className="h-[450px]  rounded-b-xl"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.position}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMapComponent;

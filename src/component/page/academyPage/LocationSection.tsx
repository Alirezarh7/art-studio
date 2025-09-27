import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { BsTelephoneFill } from "react-icons/bs";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the component props
interface LocationSectionProps {
  phone: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

const LocationSection: React.FC<LocationSectionProps> = ({
  address,
  location,
  phone,
}) => {
  // Define the position for Leaflet map [lat, lng]
  const position: [number, number] = [location.lat, location.lng];

  return (
    <div className="p-1 md:p-1 rounded-2xl mt-4">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* Map Section */}
        <div className="h-96 rounded-2xl overflow-hidden shadow-inner">
          <MapContainer 
            center={position} 
            zoom={15} 
            scrollWheelZoom={false} 
            style={{ height: '100%', width: '100%',zIndex:0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{address}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Information Section */}
        <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-around">
          <div className="flex items-center">
            <MapPinIcon className="w-6 h-6 text-[var(--single-primary)] ml-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-800">آدرس</h3>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsTelephoneFill className="w-6 h-6 text-[var(--single-primary)] ml-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-800">تلفن</h3>
              <p className="text-gray-600">{phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { MapPinIcon, LinkIcon } from "@heroicons/react/24/solid";
import mapStyle from "./mapStyle.json"; // ایمپورت استایل نقشه
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";

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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCPJGGeYTzFae7eP42OEOC7H41mLkl4KII", // 🤫 کلید API خود را اینجا قرار دهید
  });

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "1rem", // برای گرد کردن گوشه‌ها
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-96 bg-[var(--single-border)] animate-pulse rounded-2xl"></div>
    );
  }

  return (
    <div className="p-1 md:p-1 rounded-2xl  mt-4">
      {/* <h2 className="text-2xl font-extrabold text-[var(--single-text-primary)] mb-6">
        موقعیت مکانی
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* بخش نقشه */}
        <div className="md:col-span-2 h-56 rounded-2xl overflow-hidden shadow-inner">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={16}
            options={{
              styles: mapStyle,
              disableDefaultUI: true, // حذف کنترل‌های پیش‌فرض
              zoomControl: true, // فقط کنترل زوم را نگه می‌داریم
            }}
          >
            {/* مارکر سفارشی */}
            <MarkerF
              position={location}
              icon={{
                url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ec4899" class="w-12 h-12"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.169-4.44c3.486-4.225 3.486-10.373 0-14.6-3.486-4.224-9.33-4.224-12.815 0-3.486 4.227-3.486 10.373 0 14.6 1.742 2.113 3.428 3.733 5.17 4.44zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" /></svg>`,
                scaledSize: new window.google.maps.Size(48, 48),
              }}
            />
          </GoogleMap>
        </div>

        {/* بخش اطلاعات */}
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

          {/* <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center w-full bg-[var(--single-primary)] hover:bg-[var(--single-primary-hover)] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow"
          >
            <LinkIcon className="w-5 h-5 ml-2" />
            دریافت مسیر
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

import React from "react";
import AcademySlider from "./AcademySlider";
import FeatureIcon from "./FeatureIcon"; // ایمپورت FeatureIcon
import academyData from "../../../data/academyData.json"; // ایمپورت داده‌ها

import { StarIcon } from "@heroicons/react/24/solid";

const AcademyDetailsPage: React.FC = () => {
  const { name, rating, reviewCount, city, area, features, images } =
    academyData;

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-pink-50 via-[var(--single-primary-ultralight)] to-orange-50 p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-2 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-0">
          <div className="p-6 flex flex-col justify-start order-3 md:order-1">
            <h1 className="text-3xl font-extrabold text-[var(--single-text-primary)] mb-4">
              {name}
            </h1>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-[var(--single-primary-light)] pb-2">
                امکانات و ویژگی‌ها
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center text-[var(--single-text-secondary)] text-base"
                  >
                    <FeatureIcon
                      iconName={feature.icon}
                      className="w-5 h-5 ml-2 text-[var(--single-primary)]"
                    />
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-auto bg-[var(--single-primary)] hover:bg-[var(--single-primary-hover)] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
              مشاهده همه امکانات
            </button>
          </div>

          <div className="md:col-span-2 order-2">
            <AcademySlider images={images} />
            <div className="flex items-center bg-gray-100 p-2 rounded-md mt-2 text-[var(--single-text-secondary)] text-sm mb-2">
              <span className="text-xl text-yellow-500 ml-1">
                <StarIcon className="w-5 h-5 inline" />
              </span>
              <span className="font-semibold">{rating} ستاره</span>
              <span className="mr-1">({reviewCount} کاربر)</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="font-medium">
                {city}, {area}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetailsPage;

import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/24/solid";

import AcademySlider from "./AcademySlider";
import GalleryModal from "./GalleryModal";
import LazyImage from "./LazyImage";
import academyData from "./academyData.json";
import LocationSection from "./LocationSection";
import FeatureIcon from "./FeatureIcon";
import StickySidebar from "./StickySidebar";
import artCategories from "./artCategories.json";
import { HeartIcon, ShareIcon, StarIcon } from "lucide-react";
import InstructorsSection from "./InstructorsSection";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import { LOCATION_ICON, TEACHER_ICON } from "./icons";
import SectionWrapper from "./SectionWrapper";

const AcademyPage: React.FC = () => {
  const [initialImageIndex, setInitialImageIndex] = useState<number | null>(
    null
  );

  const {
    name,
    description,
    features,
    images,
    addressDetails,
    location,
    phone,
    category,
    city,
    area,
    rating,
    reviewCount,
  } = academyData;

  const currentCategory = artCategories.find((cat) => cat.id === category);

  const sliderImages = images.slice(0, 4);
  const gridImages = images.slice(4, 8);

  // تابع برای باز کردن مودال با ایندکس مشخص
  const openModal = (index: number) => {
    setInitialImageIndex(index);
  };

  // تابع برای بستن مودال
  const closeModal = () => {
    setInitialImageIndex(null);
  };

  return (
    <>
      <div dir="rtl" className="min-h-screen bg-custompattern p-4 md:p-8">
        <main className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 relative gap-1 md:h-[300px] rounded-2xl mb-4 shadow-lg overflow-hidden">
            <div className="w-full h-full lg:col-span-3">
              <AcademySlider images={sliderImages} />
            </div>

            <div className="hidden lg:block  h-[300px] lg:col-span-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                {gridImages.map((img, index) => (
                  <button
                    key={index}
                    className="relative w-full h-full"
                    // محاسبه ایندکس صحیح برای ارسال به مودال
                    onClick={() => openModal(index + sliderImages.length)}
                  >
                    <LazyImage src={img} alt={`grid image ${index + 1}`} />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => openModal(0)}
              className="absolute bottom-4 left-4 flex items-center cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-md transition-all duration-200 z-10"
            >
              <CameraIcon className="w-5 h-5 ml-2" />
              <span>گالری تصاویر</span>
            </button>
          </div>

          <div className="flex p-1 md:py-10 md:px-1 rounded-2xl">
            <div className="">
              <div className="flex flex-col lg:flex-row gap-x-2.5">
                <div className="grid gap-8 mb-3">
                  <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-between items-center mb-3">
                      <h1 className="text-3xl font-extrabold text-gray-900 col-span-3">
                        {name}
                      </h1>

                      <div className="flex justify-end items-center gap-2 lg:ml-3">
                        <button
                          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                          title="اشتراک‌گذاری"
                        >
                          <ShareIcon className="w-6 h-6" />
                        </button>
                        <button
                          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-rose-500 transition-colors"
                          title="افزودن به علاقه‌مندی‌ها"
                        >
                          <HeartIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-start gap-x-2 lg:space-x-5 gap-y-2 mb-2 mt-3 pb-2 border-b border-gray-200">
                      <div className="flex gap-3  flex-wrap">
                        {currentCategory && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
                            <FeatureIcon
                              iconName={currentCategory.icon}
                              className="w-4 h-4 ml-2"
                            />
                            {currentCategory.name}
                          </div>
                        )}

                        {(city || area) && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                            <FeatureIcon
                              iconName={"MapPinIcon"}
                              className="w-4 h-4 ml-2"
                            />
                            <span>
                              {city}
                              {area && `, ${area}`}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="inline-flex flex-1 min-w-[110px] items-center justify-self-end lg:justify-self-start gap-1 text-xs text-gray-600 font-semibold">
                        <StarIcon className="w-5 h-5 text-yellow-400" />
                        <span>{rating}</span>
                        <span className="text-gray-400 font-normal">
                          ({reviewCount} نظر)
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mt-2">
                      {description}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-rose-100 pb-2">
                      امکانات اصلی
                    </h2>
                    <div className="flex flex-wrap gap-2 my-2">
                      {features.map((feature) => (
                        <div
                          key={feature.id}
                          className="inline-flex border bg-gray-100 hover:bg-gray-200 transition border-gray-300 rounded-sm px-2 py-1 items-center text-gray-700 text-base"
                        >
                          <FeatureIcon
                            iconName={feature.icon}
                            className="w-4 h-4 ml-2"
                          />
                          <span className="font-semibold">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <SectionWrapper
                    title="اساتید و مربیان"
                    iconSrc={TEACHER_ICON}
                  >
                    <InstructorsSection />
                  </SectionWrapper>

                  <SectionWrapper title="موقعیت مکانی" iconSrc={LOCATION_ICON}>
                    <LocationSection
                      address={addressDetails}
                      location={location}
                      phone={phone}
                    />
                  </SectionWrapper>

                  <SectionWrapper title="نظرات هنرجویان" iconSrc={TEACHER_ICON}>
                    <TestimonialsSection />
                  </SectionWrapper>

                  <SectionWrapper title="سوالات متداول" iconSrc={TEACHER_ICON}>
                    <FaqSection />
                  </SectionWrapper>
                </div>

                <div className="hidden lg:block w-full lg:w-auto">
                  <StickySidebar />
                </div>
              </div>

              {/* سمت چپ: ویژگی‌ها */}
            </div>
          </div>
        </main>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white backdrop-blur-sm border-t border-gray-200 z-40">
        <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 shadow-lg">
          ثبت نام الان
        </button>
      </div>

      {initialImageIndex !== null && (
        <GalleryModal
          isOpen={initialImageIndex !== null}
          onClose={closeModal}
          images={images}
          initialIndex={initialImageIndex}
        />
      )}
    </>
  );
};

export default AcademyPage;

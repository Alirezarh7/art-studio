import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface AcademySliderProps {
  images: string[];
}

const AcademySlider: React.FC<AcademySliderProps> = ({ images }) => {
  return (
    <div dir="rtl" className="relative w-full h-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={src}
              alt={`Slider image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AcademySlider;

import React, { useRef, useState, useEffect } from "react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

// وارد کردن کامپوننت‌ها و استایل‌های Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    quote:
      "تجربه فوق‌العاده‌ای بود! استاد رضایی با صبر و حوصله تمام نکات را آموزش دادند و در مدت کوتاهی پیشرفت زیادی کردم.",
    name: "سارا احمدی",
    course: "دوره گیتار مقدماتی",
    imageUrl: "https://placehold.co/100x100/FBCFE8/4C51BF?text=SA",
  },
  {
    quote:
      "محیط آموزشگاه بسیار دوستانه و حرفه‌ای است. از شرکت در کلاس‌های گروهی پیانو بسیار لذت بردم و دوستان خوبی پیدا کردم.",
    name: "محمد قاسمی",
    course: "دوره پیانو گروهی",
    imageUrl: "https://placehold.co/100x100/FBCFE8/4C51BF?text=MQ",
  },
  {
    quote:
      "کلاس‌های صداسازی استاد کریمی بی‌نظیر بود. تکنیک‌هایی که یاد گرفتم واقعاً به من در خوانندگی کمک کرد.",
    name: "فاطمه حسنی",
    course: "کارگاه صداسازی",
    imageUrl: "https://placehold.co/100x100/FBCFE8/4C51BF?text=FH",
  },
  {
    quote:
      "از اینکه می‌توانم قطعات مورد علاقه‌ام را با ویولن بنوازم خیلی خوشحالم. همه این‌ها را مدیون استاد نوری هستم.",
    name: "علی مرادی",
    course: "دوره ویولن پیشرفته",
    imageUrl: "https://placehold.co/100x100/FBCFE8/4C51BF?text=AM",
  },
];

const TestimonialsSection: React.FC = () => {
  // ✅ 1. اضافه کردن هوک‌ها برای رصد اسکرول
  const swiperRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  // ✅ 2. اضافه کردن تابع و Effect برای مدیریت سایه‌ها
  const updateShadowVisibility = () => {
    if (swiperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = swiperRef.current;
      setShowRightShadow(scrollLeft + clientWidth < scrollWidth - 1);
      setShowLeftShadow(scrollLeft > 1);
    }
  };

  useEffect(() => {
    const swiperEl = swiperRef.current;
    if (swiperEl) {
      const initialCheck = setTimeout(() => {
        updateShadowVisibility();
      }, 100);

      swiperEl.addEventListener("scroll", updateShadowVisibility);
      return () => {
        clearTimeout(initialCheck);
        swiperEl.removeEventListener("scroll", updateShadowVisibility);
      };
    }
  }, []);

  return (
    // ✅ 3. اضافه کردن کانتینر والد با کلاس relative
    <div className="w-full py-4 relative  cursor-grab z-0">
      {/* سایه سمت راست (ابتدای اسکرول در RTL) */}
      {showRightShadow && (
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-l from-transparent to-white z-10 pointer-events-none" />
      )}

      {/* سایه سمت چپ (انتهای اسکرول در RTL) */}
      {showLeftShadow && (
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-white z-10 pointer-events-none" />
      )}

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={false}
        navigation={false}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
            pagination: { clickable: true },
          },
        }}
        className="pb-10"
        // ✅ 4. اضافه کردن onSwiper برای گرفتن رفرنس به کانتینر اسکرول
        onSwiper={(swiper) => {
          if (swiper.wrapperEl) {
            swiperRef.current = swiper.wrapperEl;
            updateShadowVisibility();
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-[var(--single-background-muted)] p-6 rounded-xl border border-[var(--single-border)] flex flex-col h-full">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-rose-300 mb-4" />
              <p className="text-[var(--single-text-secondary)] italic flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-[var(--single-border)] flex items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                />
                <div className="mr-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-[var(--single-text-muted)]">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;

import React, { useRef, useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const instructors = [
  {
    name: "استاد علی رضایی",
    specialty: "نوازنده گیتار کلاسیک و پاپ",
    bio: "بیش از ۱۵ سال سابقه تدریس و اجرا. فارغ‌التحصیل از کنسرواتوار تهران.",
  },
  {
    name: "استاد مریم حسینی",
    specialty: "مدرس پیانو و تئوری موسیقی",
    bio: "دارای مدرک کارشناسی ارشد و تجربه تدریس به کودکان و بزرگسالان.",
  },
  {
    name: "استاد بهرام کریمی",
    specialty: "خواننده و مربی صداسازی",
    bio: "متخصص در تکنیک‌های آواز کلاسیک و پاپ با سابقه همکاری با گروه‌های معتبر.",
  },
  {
    name: "استاد سارا نوری",
    specialty: "نوازنده ویولن",
    bio: "عضو ارکستر سمفونیک تهران و دارای ۱۰ سال سابقه تدریس تخصصی ویولن.",
  },
  {
    name: "استاد حمید رضوی",
    specialty: "مدرس دف و سازهای کوبه‌ای",
    bio: "متخصص در ریتم‌های ایرانی و شرقی با سال‌ها تجربه تدریس و اجرا.",
  },
];

const InstructorsSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true); // فرض می‌کنیم در ابتدا امکان اسکرول به راست هست

  const updateShadowVisibility = () => {
    if (swiperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = swiperRef.current;

      // سایه سمت راست (برای زبان فارسی: در شروع اسکرول دیده می‌شود)
      // اگر هنوز به انتهای اسکرول نرسیده‌ایم (با کمی tolerance)
      setShowRightShadow(scrollLeft + clientWidth < scrollWidth - 1);

      // سایه سمت چپ (برای زبان فارسی: وقتی به سمت چپ اسکرول می‌کنیم دیده می‌شود)
      // اگر از ابتدای اسکرول دور شدیم (با کمی tolerance)
      setShowLeftShadow(scrollLeft > 1);
    }
  };

  useEffect(() => {
    const swiperEl = swiperRef.current;
    if (swiperEl) {
      // در ابتدا هم وضعیت سایه‌ها را یک بار چک می‌کنیم
      // این به خاطر تفاوت رندرینگ Swiper و اندازه گیری اولیه است.
      // setTimeout برای اطمینان از اینکه Swiper کاملا رندر شده است.
      const initialCheck = setTimeout(() => {
        updateShadowVisibility();
      }, 100);

      swiperEl.addEventListener("scroll", updateShadowVisibility);
      // Clean up event listener
      return () => {
        clearTimeout(initialCheck);
        swiperEl.removeEventListener("scroll", updateShadowVisibility);
      };
    }
  }, []);

  return (
    <div className="w-full py-4 relative  cursor-grab z-0">
      {/* Shadow سمت راست (برای جهت RTL به معنی ابتدای اسکرول) */}
      {showRightShadow && (
        <div className="absolute inset-y-0 left-[-1px] w-8 bg-gradient-to-l from-transparent to-white z-[2]  pointer-events-none" />
      )}

      {/* Shadow سمت چپ (برای جهت RTL به معنی انتهای اسکرول) */}
      {showLeftShadow && (
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-white z-[2] pointer-events-none" />
      )}

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={1.5}
        navigation={false}
        pagination={false} // ✅ باز هم غیر فعالش کردم تا نیازی به پدینگ اضافه نباشه
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
            pagination: { clickable: true }, // فقط در دسکتاپ نقاط فعال
          },
        }}
        // ✅ یک رف (ref) به Swiper اضافه می‌کنیم تا بتوانیم اسکرول را رصد کنیم
        // توجه: Swiper خودش یک div رو render می‌کنه. ما باید به اون div داخلی دسترسی پیدا کنیم
        onSwiper={(swiper) => {
          if (swiper.wrapperEl) {
            (swiperRef as any).current = swiper.wrapperEl;
            // بلافاصله بعد از گرفتن رفرنس، وضعیت سایه رو آپدیت می‌کنیم
            updateShadowVisibility();
          }
        }}
        // برای حالت دسکتاپ که pagination فعال میشه، پدینگ میدیم
        className={showLeftShadow || showRightShadow ? "pb-0" : "pb-10"}
      >
        {instructors.map((instructor, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="flex flex-col text-center border border-[var(--single-border)] rounded-lg bg-white p-4 h-full">
              <div className="w-32 h-24 rounded-full mx-auto flex items-center justify-center">
                <UserIcon className="w-20 h-20 text-gray-300" />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="mt-4 text-lg font-bold text-gray-800">
                  {instructor.name}
                </h3>
                <p className="text-sm text-[var(--single-primary)] font-semibold">
                  {instructor.specialty}
                </p>
                <p className="mt-2 text-sm text-gray-600 flex-grow">
                  {instructor.bio}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstructorsSection;

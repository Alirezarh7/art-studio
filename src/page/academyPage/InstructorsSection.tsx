import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

const instructors = [
  {
    name: "استاد علی رضایی",
    specialty: "نوازنده گیتار کلاسیک و پاپ",
    bio: "بیش از ۱۵ سال سابقه تدریس و اجرا در سالن‌های معتبر. فارغ‌التحصیل از کنسرواتوار تهران.",
    // imageUrl: 'https://placehold.co/400x400/FBCFE8/4C51BF?text=AR', // ❌ این خط دیگر نیازی نیست
  },
  {
    name: "استاد مریم حسینی",
    specialty: "مدرس پیانو و تئوری موسیقی",
    bio: "دارای مدرک کارشناسی ارشد نوازندگی پیانو و تجربه تدریس به کودکان و بزرگسالان.",
    // imageUrl: 'https://placehold.co/400x400/FBCFE8/4C51BF?text=MH',
  },
  {
    name: "استاد بهرام کریمی",
    specialty: "خواننده و مربی صداسازی",
    bio: "متخصص در تکنیک‌های آواز کلاسیک و پاپ، با سابقه همکاری با گروه‌های موسیقی شناخته‌شده.",
    // imageUrl: 'https://placehold.co/400x400/FBCFE8/4C51BF?text=BK',
  },
];

const InstructorsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {instructors.map((instructor, index) => (
        <div
          key={index}
          className="text-center border border-gray-200 rounded-lg bg-white p-2"
        >
          <div className="w-32 h-24 rounded-full mx-auto flex items-center justify-center">
            <UserIcon className="w-20 h-20 text-gray-300" />
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-800">
            {instructor.name}
          </h3>
          <p className="text-sm text-rose-500 font-semibold">
            {instructor.specialty}
          </p>
          <p className="mt-2 text-sm text-gray-600">{instructor.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default InstructorsSection;

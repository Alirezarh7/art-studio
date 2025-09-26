import React from "react";
import {
  QuestionMarkCircleIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const StickySidebar: React.FC = () => {
  const features = [
    {
      icon: QuestionMarkCircleIcon,
      text: "راهنمای ثبت نام",
      linkText: "مشاهده",
      href: "#",
    },
    {
      icon: GiftIcon,
      text: "۲۰٪ تخفیف اولین جلسه",
      linkText: null,
      href: null,
    },
    {
      icon: ChatBubbleLeftRightIcon,
      text: "مشاوره رایگان تلفنی",
      linkText: null,
      href: null,
    },
    {
      icon: CreditCardIcon,
      text: "امکان پرداخت اقساطی",
      linkText: null,
      href: null,
    },
  ];

  const courses = [
    {
      icon: MusicalNoteIcon,
      name: "دوره جامع گیتار",
      price: "شروع از ۲,۵۰۰,۰۰۰ تومان",
    },
    {
      icon: PaintBrushIcon,
      name: "کلاس‌های پیانو کلاسیک",
      price: "شروع از ۳,۰۰۰,۰۰۰ تومان",
    },
    {
      icon: SparklesIcon,
      name: "کارگاه صداسازی و آواز",
      price: "شروع از ۱,۸۰۰,۰۰۰ تومان",
    },
  ];

  return (
    <div className="top-24 sticky w-full min-w-72">
      {/* Changes:
        1. Added `flex flex-col` to make this a vertical flex container.
        2. Added `max-h-[calc(100vh-7rem)]` to constrain the height and allow inner scrolling.
      */}
      <div className="flex flex-col rounded-2xl py-6 px-4 border border-rose-100 bg-white shadow-rose-100 shadow-sm max-h-[calc(100vh-7rem)]">
        {/* Changes:
          1. Wrapped the scrollable content in a new div.
          2. `flex-1` makes this div grow and take all available space, pushing the button down.
          3. `overflow-y-auto` adds a scrollbar ONLY when the content is too tall.
        */}
        <div className="flex-1 overflow-y-auto modal-scroll pl-2">
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">
              دوره‌های آموزشی
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <course.icon className="w-6 h-6 text-rose-400" />
                  <div className="mr-3">
                    <p className="font-semibold text-gray-700">{course.name}</p>
                    <p className="text-xs text-gray-500">{course.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="w-5 h-5 text-gray-300" />
                <span className="mr-2.5 text-gray-600 font-medium text-sm">
                  {feature.text}
                </span>
                {feature.linkText && (
                  <a
                    href={feature.href || "#"}
                    className="text-xs text-blue-600 hover:underline mr-auto font-thin"
                  >
                    {feature.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* This button container is now a flex item that will be pushed to the bottom */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="w-full bg-rose-500 cursor-pointer hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            ثبت نام الان
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;

import React from "react";
import {
  QuestionMarkCircleIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import {
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
      <div className=" rounded-2xl p-6 border border-rose-100 bg-white shadow-rose-100 shadow-sm">
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

        <div className="space-y-5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <feature.icon className="w-6 h-6 text-gray-400" />
              <span className="mr-4 text-gray-600 font-medium">
                {feature.text}
              </span>
              {feature.linkText && (
                <a
                  href={feature.href || "#"}
                  className="text-sm text-blue-600 hover:underline mr-auto font-semibold"
                >
                  {feature.linkText}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-105 shadow-md hover:shadow-lg">
            ثبت نام الان
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;

import React from "react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

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
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-[var(--single-background-muted)] p-6 rounded-xl border border-[var(--single-border)] flex flex-col"
        >
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
      ))}
    </div>
  );
};

export default TestimonialsSection;

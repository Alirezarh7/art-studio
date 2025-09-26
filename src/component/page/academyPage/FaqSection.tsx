import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "آیا برای شرکت در کلاس نیاز به ساز شخصی دارم؟",
    answer:
      "برای شروع، نیازی به داشتن ساز شخصی نیست. آموزشگاه سازهایی برای تمرین در کلاس در اختیار شما قرار می‌دهد. با این حال، برای تمرین در منزل و پیشرفت سریع‌تر، تهیه ساز شخصی توصیه می‌شود.",
  },
  {
    question: "شرایط سنی برای ثبت‌نام چیست؟",
    answer:
      "ما دوره‌های مخصوص کودکان (از ۵ سال به بالا)، نوجوانان و بزرگسالان را برگزار می‌کنیم. برای هر دوره، شرایط سنی خاصی وجود دارد که می‌توانید در بخش دوره‌ها مشاهده کنید.",
  },
  {
    question: "آیا جلسه اول آزمایشی یا مشاوره رایگان دارید؟",
    answer:
      "بله، شما می‌توانید برای یک جلسه مشاوره رایگان با اساتید ما هماهنگ کنید تا با محیط آموزشگاه و سبک تدریس آشنا شوید و بهترین دوره را برای خود انتخاب کنید.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl space-y-2">
      {faqs.map((faq, index) => (
        <Disclosure key={index} as="div" className="pt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full cursor-pointer justify-between rounded-lg bg-[var(--single-primary-ultralight)] px-4 py-3 text-left text-base font-medium text-rose-900 hover:bg-[var(--single-primary-light)] focus:outline-none focus-visible:ring focus-visible:ring-[var(--single-primary)] focus-visible:ring-opacity-75">
                <span className="text-right">{faq.question}</span>
                <ChevronUpIcon
                  className={`${
                    !open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[var(--single-primary)] transition-transform duration-200`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-600">
                  {faq.answer}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default FaqSection;

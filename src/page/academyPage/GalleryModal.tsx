import React, { useState, useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import LazyImage from "./LazyImage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";

import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex: number;
}

// انیمیشن پس‌زمینه (سیاه)
const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// انیمیشن خود مودال (حرکت از پایین و fade)
const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
  },
};

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (swiperInstance) {
        swiperInstance.slideToLoop(initialIndex);
        setActiveIndex(initialIndex);
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialIndex, swiperInstance]);

  useEffect(() => {
    if (thumbnailRefs.current[activeIndex]) {
      thumbnailRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.history.pushState({ modalOpen: true }, "");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
          dir="rtl"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            className="relative mx-4 w-full max-w-[calc(100vw-40px)] rounded-2xl bg-white shadow-xl flex flex-col max-h-[85vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--single-border)] flex-shrink-0">
              <h2 className="text-lg font-bold text-gray-800">گالری تصاویر</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[var(--single-text-muted)] hover:bg-gray-100 transition-colors"
                aria-label="بستن مودال"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 md:p-6 flex-1 overflow-y-auto hide-y-scrollbar">
              <div className="w-full h-[50vh] mb-4 relative">
                <Swiper
                  modules={[Navigation, Keyboard]}
                  initialSlide={initialIndex}
                  onSwiper={setSwiperInstance}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation={true}
                  keyboard={{ enabled: true }}
                  loop={true}
                  className="w-full h-full rounded-xl"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <LazyImage
                        src={image}
                        alt={`Gallery view ${index + 1}`}
                        className="rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[var(--single-primary)] scrollbar-track-[var(--single-primary-light)]">
                <div className="flex gap-4 my-1 px-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      ref={(el) => (thumbnailRefs.current[index] = el)}
                      onClick={() => swiperInstance?.slideToLoop(index)}
                      className={`flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                        activeIndex === index
                          ? "ring-2 ring-[var(--single-primary)]"
                          : "hover:opacity-80"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;

'use client';
import  { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom";

const ResumeSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const data = [
        { id: '1', src: '/image/slider/1.jpg', title: 'راه هنر1' },
        { id: '2', src: '/image/slider/2.jpg', title: 'راه هنر 2' },
        { id: '2', src: '/image/slider/3.jpg', title: 'راه هنر 3' },
        { id: '3', src: '/image/slider/4.jpg', title: 'راه هنر 4' },
        { id: '4', src: '/image/slider/5.jpg', title: 'راه هنر 5' },
        { id: '5', src: '/image/slider/6.jpg', title: 'راه هنر 6' }
    ];

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            goToNextSlide();
        }, 6000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data?.length - 1 : prevIndex - 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: goToNextSlide,
        onSwipedRight: goToPrevSlide,
        trackMouse: true,
    });

    const getSlideProps = (index: number) => {
        const total = data.length;
        const diff = (index - currentIndex + total) % total;
        if (diff === 0) {
            return { opacity: 1, scale: 1, x: 0, zIndex: 3 };
        }
        if (diff === 1) {
            return { opacity: 0.6, scale: 0.9, x: 290, zIndex: 2 };
        }
        if (diff === 2 || (total > 4 && diff === - (total - 2))) {
            return { opacity: 0.4, scale: 0.8, x: 550, zIndex: 1 };
        }
        if (diff === total - 1) {
            return { opacity: 0.6, scale: 0.9, x: -290, zIndex: 2 };
        }
        if (diff === total - 2 || (total > 4 && diff === -2)) {
            return { opacity: 0.4, scale: 0.8, x: -550, zIndex: 1 };
        }
        return { opacity: 0, scale: 0.7, x: 0, zIndex: 0 };
    };


    return (
        <div
            {...handlers}
            className="relative w-full h-[400px] overflow-hidden flex justify-center items-center my-10"
        >
            {data?.map((item, index) => {
                const props = getSlideProps(index);
                return (
                    <motion.div
                        key={item.id}
                        className="absolute w-[300px] h-[350px] rounded-[10px] overflow-hidden"
                        animate={props}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <Link to={`/about-us#${item.id}`} className="w-full h-full block relative">
                            <img
                                src={item.src}
                                alt={item.title}
                                width={300}
                                height={350}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full p-2 bg-black bg-opacity-60 text-white text-center">
                                {item.title}
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ResumeSlider;

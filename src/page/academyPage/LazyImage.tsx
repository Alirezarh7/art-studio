import React, { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const timer = setTimeout(() => {
      img.onload = () => {
        setIsLoading(false);
      };

      if (img.complete) {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [src]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-lg ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default LazyImage;

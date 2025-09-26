import React from "react";

interface SectionWrapperProps {
  title: string;
  iconSrc: string;
  className?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  iconSrc,
  className,
  children,
}) => {
  return (
    <>
      <div className="mt-2">
        <div className="flex items-center gap-3 border-b-2 border-rose-100">
          <img src={iconSrc} className="w-14 h-14" />
          <h2 className="text-xl font-bold flex-1 text-gray-800">{title}</h2>
        </div>
      </div>
      <div className={`p-1 md:p-4 rounded-2xl ${className}`}>
        <div>{children}</div>
      </div>
    </>
  );
};

export default SectionWrapper;

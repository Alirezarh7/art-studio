import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline";

type IconMap = {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const iconMap: IconMap = HeroIcons;

interface FeatureIconProps {
  iconName: string;
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ iconName, className }) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in Heroicons.`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default FeatureIcon;

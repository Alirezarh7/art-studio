import { StarIcon } from "lucide-react";
import type { FC } from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PropsType {
  id: number;
  name: string;
  disciplines: string[];
  address: string;
  city: string;
  phone: string;
  email: string;
  website: string;
  image: string;
  description: string;
  rating: number;
  price_range: string;
  opening_hours: {
    shanbe: string;
    yekShanbe: string;
    doShanbe: string;
    sehShanbe: string;
    chaharShanbe: string;
    panjShanbe: string;
    jomea: string;
  };
  social: {
    instagram?: string;
    telegram?: string;
    youtube?: string;
    linkedin?: string;
  };
}

const SchoolsCard: FC<PropsType> = ({ name, disciplines, address, city, phone, website, image, description, rating, price_range, opening_hours, social }) => {
  return (
    <li className="w-full p-5 bg-gray-100 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center md:justify-between gap-5 md:flex-row w-full">
        <img src={image} alt="school" className="max-h-80 w-full md:w-1/3 rounded-2xl object-contain object-center" />
        <div className="flex flex-col items-start justify-between h-full gap-5 md:flex-1">
          <div className="flex items-center justify-between gap-2 w-full">
            <p className="text-gray-800 text-2xl font-bold">{name}</p>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 - Math.floor(rating) }).map(() => {
                return <StarIcon className="text-gray-400 fill-gray-400" />;
              })}
              {Array.from({ length: rating }).map(() => {
                return <StarIcon className="text-amber-400 fill-amber-400" />;
              })}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">رشته ها :</p>
            <div className="flex flex-row gap-2 flex-wrap w-full">
              {disciplines.map((item) => {
                return <p className="text-gray-800 text-base font-medium bg-gray-200 px-3 py-2 rounded-4xl cursor-pointer hover:scale-105 transition duration-300">{item}</p>;
              })}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">شهر :</p>
            <p className="text-gray-800 text-base font-medium">{city}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">آدرس :</p>
            <p className="text-gray-800 text-base font-medium">{address}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">شماره تماس :</p>
            <p className="text-gray-800 text-base font-medium">{phone}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">وبسایت :</p>
            <p className="text-gray-800 text-base font-medium">{website}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">بازه قیمت :</p>
            <p className="text-gray-800 text-base font-medium">{price_range}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            <p className="text-gray-800 text-base font-medium">توضیحات :</p>
            <p className="text-gray-800 text-base font-medium text-right">{description}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap w-full">
            {social.instagram && (
              <Link to={social.instagram}>
                <FaInstagram className="text-orange-400 text-4xl" />
              </Link>
            )}
            {social.linkedin && (
              <Link to={social.linkedin}>
                <FaLinkedin className="text-orange-400 text-4xl" />
              </Link>
            )}
            {social.telegram && (
              <Link to={social.telegram}>
                <FaTelegram className="text-orange-400 text-4xl" />
              </Link>
            )}
            {social.youtube && (
              <Link to={social.youtube}>
                <FaYoutube className="text-orange-400 text-4xl" />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">شنبه :</p>
            <p className="text-white text-base font-medium">{opening_hours.shanbe}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">یکشنبه :</p>
            <p className="text-white text-base font-medium">{opening_hours.yekShanbe}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">دوشنبه :</p>
            <p className="text-white text-base font-medium">{opening_hours.doShanbe}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">سه شنبه :</p>
            <p className="text-white text-base font-medium">{opening_hours.sehShanbe}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">چهار شنبه :</p>
            <p className="text-white text-base font-medium">{opening_hours.chaharShanbe}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">پنج شنبه :</p>
            <p className="text-white text-base font-medium">{opening_hours.panjShanbe}</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-400 rounded-4xl w-50 justify-center">
            <p className="text-white text-base font-bold">جمعه :</p>
            <p className="text-white text-base font-medium">{opening_hours.jomea}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default SchoolsCard;

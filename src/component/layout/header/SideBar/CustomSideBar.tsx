"use client";
import { useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const CustomSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const data = [
    { href: "/", icon: "", src: "/image/logo.png", title: "فتوگرافیک" },
    { href: "/", icon: "", src: "/image/logo.png", title: "طراحی دوخت" },
    { href: "/", icon: "", src: "/image/logo.png", title: "معماری" },
    { href: "/", icon: "", src: "/image/logo.png", title: "گرافیک" },
    {
      href: "/",
      icon: <FaChalkboardTeacher className="text-[#832a04]" />,
      src: "",
      title: "درباره ما",
    },
  ];
  return (
    <div className="rtl">
      <LuMenu
        className="text-[#832a04] w-11 h-11 cursor-pointer inline-flex items-center p-2"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      />
      {isSidebarOpen && (
        <div
          className="  fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-40 w-72 h-screen transition-transform duration-700 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 bg-[var(--single-border)]  ">
          <IoIosCloseCircleOutline
            className=" cursor-pointer text-[#832a04] w-9 h-9 fixed left-3 top-5  "
            onClick={() => setSidebarOpen(false)}
          />
          <div className="w-full mt-12  flex flex-col items-center">
            <img
              src="/image/logo.png"
              alt={"راه هنر"}
              height={90}
              width={90}
              className={`${isSidebarOpen ? "rotate-animation" : ""}`}
            />
            <strong className="my-4 text-xl bg-gradient-to-l  from-[#d37827] via-[#c62d27] to-black inline-block text-transparent bg-clip-text">
              راه هنر
            </strong>
            {data.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className=" cursor-pointer hover:bg-gray-400 py-3 border-b border-gray-300 w-full grid grid-cols-5 items-center "
              >
                <div className="col-span-1 mx-auto ">
                  {item.src ? (
                    <img
                      src={item?.src}
                      alt={item.title}
                      width={25}
                      height={25}
                    />
                  ) : (
                    <div>{item.icon}</div>
                  )}
                </div>
                <div className=" col-span-4">{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;

import React from "react";
import {
  BsNewspaper,
  BsFillCalendarEventFill,
  BsClipboardCheck,
} from "react-icons/bs";

import { MdLocationOn } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import CarouselSlider from "../components/Carousel";
const HomePage = () => {
  const navigate = useNavigate();
  const miniNavbar = [
    { icon: <BsNewspaper size={30} />, label: "News", link: "/home/news" },
    {
      icon: <BsFillCalendarEventFill size={30} />,
      label: "Projects",
      link: "/home/projects",
    },
    {
      icon: <BsClipboardCheck size={30} />,
      label: "Events",
      link: "/home/events",
    },
    {
      icon: <MdLocationOn size={30} />,
      label: "Location",
      link: "/home/location",
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center">
      <CarouselSlider />
      <div className="w-screen bg-white ">
        <div className="flex justify-center item"></div>
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-center justify-center lg:flex-row flex-col lg:gap-52 gap-7 p-5 bg-green-600 text-white font-Cinzel w-full">
            {miniNavbar?.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <div
                    className="flex flex-row items-center gap-2 hover:scale-105 cursor-pointer "
                    onClick={() => {
                      navigate(item?.link);
                    }}
                  >
                    <div>{item?.icon}</div>
                    <div>
                      <button className="">{item?.label}</button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div>
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

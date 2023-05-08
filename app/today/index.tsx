"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState, ReactNode } from "react";
import defaultImage from "./sz.png";

type UserType = {
  id: string;
  name: string;
  social?: string;
};
type Location = {
  url: string;
  name: string;
};
type TodayView = {
  img: string | StaticImageData;
  desc: ReactNode;
  user: UserType;
  location: Location;
};

const defaultView: TodayView = {
  img: defaultImage,
  desc: (
    <span>
      This is a morning view from ShenZhen. The bridge is called{" "}
      <a href="https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%9C%B3%E7%81%A3%E5%85%AC%E8%B7%AF%E5%A4%A7%E6%A9%8B">
        Shenzhen Bay Bridge
      </a>
      . It connects ShenZhen and Hong Kong. You can see the sunlight go through
      the cloud and hit on the sea. What a becautiful view.
    </span>
  ),
  user: {
    id: "0",
    name: "GYN",
  },
  location: {
    name: "ShenZhen, China",
    url: "https://www.google.com/search?q=%E6%B7%B1%E5%9C%B3",
  },
};

const TodayView = () => {
  const [todayView, setTodayView] = useState(defaultView);
  // Get today's view
  useEffect(() => {}, []);
  return (
    <div className="mt-5 mb-5 todayView">
      <Image
        className="mainPicture rounded-3xl shadow-2xl"
        alt={"Today Picture"}
        src={todayView.img}
        width={450}
        onClick={() => {
          window.open(todayView.location.url);
        }}
      />
      <div className="todayViewImageContainer flex flex-col w-80">
        <div className="pb-10 flex flex-col">
          <span className="text-2xl pb-2">The Story</span>
          <span>{todayView.desc}</span>
        </div>
        <span className="pb-2">
          Author: <a href={todayView.user.social}>{todayView.user.name}</a>
        </span>
        <span>
          Location:{" "}
          <a href={todayView.location.url}>{todayView.location.name}</a>
        </span>
      </div>
    </div>
  );
};

export default TodayView;

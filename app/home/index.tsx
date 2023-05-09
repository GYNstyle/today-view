import TodayView from "../today";
import dayjs from "dayjs";

const HomePage = () => {
  const date = dayjs().format("YYYY-MM-DD");
  return (
    <div>
      <div className="homeTitle">
        <span className="text-2xl levelOneTitle">
          &#127958; Today&apos;s View
        </span>
        <span className="text-slate-300">Take me to see the world</span>
        {/* <span>{date}</span> */}
      </div>
      <TodayView />
    </div>
  );
};

export default HomePage;

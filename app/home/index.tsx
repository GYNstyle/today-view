import TodayView from "../today";

const HomePage = () => {
  return (
    <div>
      <div className="homeTitle">
        <span className="text-2xl levelOneTitle">Today&apos;s View</span>
        <span className="text-slate-300">Take me to see the world</span>
      </div>
      <TodayView />
    </div>
  );
};

export default HomePage;

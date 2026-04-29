import Marquee from "react-fast-marquee";

const news = [
  {
    id: "1",
    title: "Breaking News: Mali is captured by Mujahidin  . ",
  },
  {
    id: "2",
    title: "Breaking News: New policy Announced by Government .   ",
  },
  {
    id: "3",
    title: " Breaking News: Bangladesh wins by 12 run   . ",
  },
  {
    id: "4",
    title: " Breaking News: Mali is captured by Mujahidin  . ",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 container mx-auto px-2">
      <button className="btn cursor-text bg-pink-700 text-white">
        Latest News
      </button>
      <Marquee pauseOnHover>
        {news.map((n) => {
          return (
            <p key={n.id} className="ml-3 font-semibold">
              {n.title}{" "}
            </p>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;

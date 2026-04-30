import LeftSideBar from "@/components/Homepage/news/LeftSideBar";
import RightSideBar from "@/components/Homepage/news/RightSideBar";
import Image from "next/image";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);

  return (
    <div className="grid grid-cols-12 container mx-auto gap-3 my-16">
      <div className=" col-span-3">
        <LeftSideBar categories={categories} activeId={null} />
      </div>

      <div className="font-bold text-3xl bg-pink-200 col-span-6">All News</div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}

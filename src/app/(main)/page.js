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
        <h2 className="font-bold text-xl"> All Categories</h2>
        <ul className=" flex flex-col gap-3 mt-7">
          {" "}
          {categories.news_category.map((category) => {
            return (
              <li
                className="bg-slate-100 p-3 rounded-md font-bold text-md text-center"
                key={category.category_id}
              >
                {category.category_name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="font-bold text-3xl bg-pink-200 col-span-6">All News</div>
      <div className="font-bold text-3xl bg-yellow-200 col-span-3">
        Social Section
      </div>
    </div>
  );
}

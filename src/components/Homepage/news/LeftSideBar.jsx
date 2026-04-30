import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  console.log(activeId, "active");
  return (
    <div>
      <h2 className="font-bold text-xl"> All Categories</h2>
      <ul className=" flex flex-col gap-3 mt-7">
        {" "}
        {categories.news_category.map((category) => {
          console.log(categories);
          return (
            <li
              className={`${activeId === category.category_id && "bg-red-200"} rounded-md font-bold text-md text-center`}
              key={category.category_id}
            >
              <Link
                className="block p-3"
                href={`/category/${category.category_id}`}
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;

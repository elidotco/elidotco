import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newcategory) => setCategories(newcategory));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
      <h3 className="text-xl mb-8 font-semibold pb-4 border-b">Categories</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="cursor-pointer pb-3 block mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Category;

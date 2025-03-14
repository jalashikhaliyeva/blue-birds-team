// components/OurCollections.jsx

import React, { useState } from "react";
import Container from "../Container";
import SliderEmbla from "../EmblaCarouselAdvantage/EmblaCarousel";
import {
  getProductsByCategory,
  getProducts, // For the "All" case
  getNewProducts, // For the "New" case
} from "@/lib/api";

function OurCollections({ categories, products }) {
  const [activeProducts, setActiveProducts] = useState(products);
  const handleCategoryClick = async (catIdOrString) => {
    try {
      let fetchedProducts;

      if (catIdOrString === "all") {
        // "All"
        fetchedProducts = await getProducts();
      } else if (catIdOrString === "new") {
        // "New"
        fetchedProducts = await getNewProducts();
      } else {
        // Real category ID (number)
        fetchedProducts = await getProductsByCategory(catIdOrString);
      }

      setActiveProducts(fetchedProducts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-mainColorDark py-20">
      <Container>
        <h3 className="uppercase text-3xl md:text-6xl font-oswald font-semibold text-center pb-10">
          Our Collections
        </h3>

        {/* Categories List */}
        <div className="flex flex-wrap gap-3 md:gap-20 uppercase text-base md:text-2xl pb-16">
          {/* Manual "All" */}
          <p
            className="cursor-pointer"
            onClick={() => handleCategoryClick("all")}
          >
            All
          </p>

          {/* Manual "New" */}
          <p
            className="cursor-pointer"
            onClick={() => handleCategoryClick("new")}
          >
            New
          </p>

          {/* Render categories from the API */}
          {categories?.data?.map((category) => (
            <p
              className="cursor-pointer"
              key={category.slug}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </p>
          ))}
        </div>

        {/* Slider that shows products for the currently selected "category" */}
        <SliderEmbla data={activeProducts?.data} type="project" />
      </Container>
    </div>
  );
}

export default OurCollections;

"use client";
import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard"; // Adjust the import path if necessary
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure you have this installed

const Card: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Default value
  const [translateXValue, setTranslateXValue] = useState(0);

  const totalItems = 8; // Total number of items

  // Define translate values for different screen sizes
  const translateValues = {
    mobile: 12.5, // 100% for mobile
    tablet: 12.5, // 50% for tablet
    desktop: 12.5, // 25% for desktop
  };

  // Update itemsToShow and translateXValue based on screen size
  useEffect(() => {
    const handleResize = () => {
      let items = 4;
      let translateValue = translateValues.desktop; // Default translate value

      if (window.innerWidth < 768) {
        // Mobile
        items = 1;
        translateValue = translateValues.mobile;
      } else if (window.innerWidth < 1280) {
        // Tablet
        items = 2;
        translateValue = translateValues.tablet;
      } else {
        // Desktop
        items = 4;
        translateValue = translateValues.desktop;
      }

      setItemsToShow(items);
      setTranslateXValue(-currentIndex * translateValue); // Adjust translateXValue based on currentIndex
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalItems - itemsToShow)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section className="h-screen pb-10 pt-10 md:pt-20 dark:bg-dark lg:pb-2 lg:pt-[40px] relative overflow-hidden">
      <div className="container">
        <div>
          <h1 className="mx-auto text-center text-5xl font-bold uppercase text-slate-800 mb-10">Carousel Section</h1>
        </div>
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(${translateXValue}%)`,
              width: `${(100 * totalItems) / itemsToShow}%`, // Set the width of the carousel container
            }}
          >
            <SingleCard
              image="/images/img1.png"
              CardTitle="Full Sleaves Jacket"
              titleHref="/#"
              btnHref="/#"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img2.png"
              CardTitle="Dashing Shoes"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img3.png"
              CardTitle="Men's Watch"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img5.png"
              CardTitle="Electric Lamp"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img6.png"
              CardTitle="College Bag"
              titleHref="/#"
              btnHref="/#"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img7.png"
              CardTitle="Wall Clock"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img9.png"
              CardTitle="Women's Purse"
              Button="Add To Cart"
            />
            <SingleCard
              image="/images/img11.png"
              CardTitle="Stylish Jacket"
              Button="Add To Cart"
            />
          </div>
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-5 opacity-75 hover:opacity-100 duration-300 shadow-md dark:bg-dark-2"
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </button>
          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-5 opacity-75 hover:opacity-100 duration-300 shadow-md dark:bg-dark-2"
            disabled={currentIndex === totalItems - itemsToShow}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;

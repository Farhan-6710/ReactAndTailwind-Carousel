import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // Ensure you have lucide-react installed

interface SingleCardProps {
  image: string;
  Button?: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  Button,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  const [isInCartState, setIsInCartState] = useState(false); // State to track if the item is in the cart

  // Dummy functions to simulate add and remove actions
  const handleAddToCart = () => {
    setIsInCartState(true);
  };

  const handleRemoveFromCart = () => {
    setIsInCartState(false);
  };

  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 w-full md:mx-4">
      <Image
        src={image}
        alt={CardTitle}
        width={500}
        height={300}
        className="w-full object-contain h-56"
      />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 xl:pt-4">
        <h3>
          <a
            className="mb-4 block text-xl font-semibold text-dark dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </a>
        </h3>
        <div className="flex items-center justify-center space-x-2 mt-4">
          {!isInCartState && Button && (
            <button
              onClick={handleAddToCart}
              aria-label={`Add ${CardTitle} to cart`}
              className={`px-4 py-2 h-10 rounded transition-all duration-200 ${
                // Adjust the button styles based on dark mode or default
                "bg-slate-900 text-white"
              }`}
            >
              {Button}
            </button>
          )}
          {isInCartState && (
            <div className="flex items-center space-x-2">
              <span
                className={`px-4 py-2 h-10 rounded bg-yellow-400 text-slate-950 font-bold transition-all duration-200 ${
                  // Adjust styles based on dark mode
                  "text-primaryDark"
                }`}
              >
                Added to Cart
              </span>
              <button
                onClick={handleRemoveFromCart}
                aria-label={`Remove ${CardTitle} from cart`}
                className="p-2 h-10 w-10 rounded bg-red-600 text-white transition-all duration-200 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

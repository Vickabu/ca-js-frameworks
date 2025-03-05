import { useState } from "react";
import PropTypes from "prop-types";
import Ratings from "./Ratings";
import { X } from "lucide-react";

const Reviews = ({ reviews }) => {
  console.log(reviews);
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold cursor-pointer"
      >
        {isOpen ? 
          <>
            <div className="flex items-center gap-1">
              <X className="text-red-600 w-[20px] md:w-[24px] lg:w-[30px]"/> 
              <span className="text-[14px] md:text-[16px] lg:text-[18px] font-regular">
                Close
              </span> 
            </div>
          </> : reviews.length > 0 ? `Reviews: ${reviews.length}` : "No reviews yet"}
      </div>

      {isOpen && reviews.length > 0 && (
        <ul className="mt-2 border border-[#BDBDBD] px-4 py-2 rounded ">
          {reviews.map((review) => (
            <li key={review.id}>
              <p className="text-[10px] md:text-[14px] font-semibold">{review.username}</p>
              <p className="text-[10px] md:text-[14px]">{review.description}</p>
              <Ratings rating={review.rating}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Reviews;

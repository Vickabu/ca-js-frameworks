import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Ratings component displays a 5-star rating system.
 * Highlights stars based on the rounded `rating` value passed in.
 *
 * @component
 * @param {Object} props
 * @param {number} [props.rating=0] - The rating value, from 0 to 5.
 * @returns {JSX.Element} The rendered star rating component.
 */

const Ratings = ({ rating = 0 }) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={
            index < roundedRating
              ? 'fill-yellow-500 text-yellow-500 w-[12px] md:w-[16px] lg:w-[18px]'
              : 'text-gray-300 w-[12px] md:w-[16px] lg:w-[18px]'
          }
        />
      ))}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number,
};

export default Ratings;

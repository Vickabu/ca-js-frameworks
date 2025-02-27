import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

const Ratings = ({ rating = 0 }) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={index < roundedRating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number,
};

export default Ratings;



import PropTypes from 'prop-types';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

/**
 * ProductListCard component renders a single product item within a product list.
 * Displays product image, title, pricing (including discounts), and rating.
 * Wraps the card in a link to the product detail page.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product to display.
 * @param {string} props.product.id - Unique identifier for the product.
 * @param {string} props.product.title - Title of the product.
 * @param {Object} props.product.image - Image object for the product.
 * @param {string} props.product.image.url - URL of the product image.
 * @param {number} props.product.price - Original price of the product.
 * @param {number} [props.product.discountedPrice] - Discounted price if available.
 * @param {number} [props.product.rating] - Average user rating for the product.
 * @returns {JSX.Element} The rendered product list card.
 */

const ProductListCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded border-gray-400 bg-white flex flex-col h-full shadow-lg lg:hover:scale-103 transition-transform duration-300">
        <div className="w-full h-[210px] overflow-hidden rounded-t">
          <img
            src={product.image.url}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col px-4 py-4 min-h-[150px] md:min-h-[180px] flex-grow">
          <h2 className="text-lg font-semibold">{product.title}</h2>

          <div className="mt-2">
            {product.discountedPrice &&
            product.discountedPrice < product.price ? (
              <p className="flex flex-col">
                <span className="line-through text-gray-500 text-[12px] md:text-[14px] lg:text-[16px]">
                  Kr {product.price}
                </span>
                <span className="text-green-600 font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                  Kr {product.discountedPrice}
                </span>
              </p>
            ) : (
              <p className="text-lg font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                Kr {product.price}
              </p>
            )}
          </div>

          <div className="mt-auto">
            <Ratings rating={product.rating} />
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductListCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};

export default ProductListCard;

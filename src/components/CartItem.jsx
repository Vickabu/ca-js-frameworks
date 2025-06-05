/**
 * CartItem component displays a product in the cart with controls for quantity and removal.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.item - The cart item object
 * @param {string|number} props.item.id - Unique product ID
 * @param {string} props.item.title - Title of the product
 * @param {number} props.item.price - Original price of the product
 * @param {number} [props.item.discountedPrice] - Discounted price, if any
 * @param {number} props.item.quantity - Number of items
 * @param {{ url: string }} props.item.image - Product image object
 * @param {Function} props.handleQuantityChange - Function to update item quantity
 * @param {Function} props.handleRemoveFromCart - Function to remove item from cart
 * @returns {JSX.Element}
 */

import PropTypes from 'prop-types';
import { Trash2, Plus, Minus } from 'lucide-react';
import Button from './Button';

export default function CartItem({
  item,
  handleQuantityChange,
  handleRemoveFromCart,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border p-4 mb-4 rounded">
      <div className="flex items-center">
        <img
          src={item.image.url}
          alt={item.title}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.discountedPrice && item.discountedPrice < item.price ? (
            <p>
              <span className="line-through text-gray-500 mr-2">
                Kr {item.price}
              </span>
              <span className="text-green-600 font-bold">
                Kr {item.discountedPrice}
              </span>
            </p>
          ) : (
            <p>Kr {item.price}</p>
          )}
        </div>
      </div>

      <div className="flex ml-auto mt-4 sm:mt-0">
        {item.quantity > 1 && (
          <Button
            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            variant="secondary"
            className="p-1 bg-gray-100 hover:bg-red-400"
            icon={<Minus size={16} />}
          />
        )}
        <span className="px-4">{item.quantity}</span>
        <Button
          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
          variant="secondary"
          className="p-1 bg-gray-100 hover:bg-green-600"
          icon={<Plus size={16} />}
        />
        <Button
          onClick={() => handleRemoveFromCart(item.id)}
          variant="secondary"
          className="p-1 ml-5 text-black bg-gray-100 hover:bg-red-500"
          icon={<Trash2 size={20} />}
        />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

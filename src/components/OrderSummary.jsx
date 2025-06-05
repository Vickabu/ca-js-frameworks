import CartItem from './CartItem';
import PropTypes from 'prop-types';

/**
 * OrderSummary component displays the summary of the shopping cart,
 * including all cart items, subtotal, discounts, shipping, and total.
 *
 * @component
 * @param {Object} props - Props for the OrderSummary component.
 * @param {Array} props.cart - Array of cart items to display.
 * @param {number} props.totalAmount - Final total after discounts.
 * @param {number} props.originalTotal - Original total before discounts.
 * @param {Function} props.removeFromCart - Function to remove an item from the cart.
 * @param {Function} props.updateQuantity - Function to update item quantity.
 * @returns {JSX.Element}
 */

export default function OrderSummary({
  cart,
  totalAmount,
  originalTotal,
  removeFromCart,
  updateQuantity,
}) {
  const totalDiscount = (originalTotal - totalAmount).toFixed(2);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4 text-center">Order Summary</h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleQuantityChange={updateQuantity}
          handleRemoveFromCart={removeFromCart}
        />
      ))}

      <hr className="my-3" />
      <div className="flex justify-between mb-4">
        <p>Subtotal:</p>
        {totalAmount < originalTotal ? (
          <div className="text-right">
            <p>
              <span className="line-through text-gray-500 mr-2">
                Kr {originalTotal}
              </span>
              <span className="text-green-600 font-bold">Kr {totalAmount}</span>
            </p>
            <p className="text-green-800 text-sm font-semibold">
              You are saving kr {totalDiscount}!
            </p>
          </div>
        ) : (
          <p>Kr {totalAmount}</p>
        )}
      </div>

      <div className="flex justify-between mb-4">
        <p>Shipping:</p>
        <p className="text-gray-400 text-sm">Arrives in 132-312 working days</p>
        <p>kr 50</p>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between font-bold text-lg">
        <p>Total:</p>
        <p>Kr {parseFloat(totalAmount) + 50}</p>
      </div>
      <hr className="my-3" />
    </div>
  );
}

OrderSummary.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalAmount: PropTypes.number.isRequired,
  originalTotal: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

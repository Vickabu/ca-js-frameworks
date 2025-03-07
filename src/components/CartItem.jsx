import PropTypes from "prop-types";
import { Trash2, Plus, Minus } from "lucide-react";


export default function CartItem({ item, handleQuantityChange, handleRemoveFromCart }) {
  return (
    <div className="flex items-center justify-between border p-4 mb-2 rounded">
      <div className="flex items-center">
        <img src={item.image.url} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          {item.discountedPrice && item.discountedPrice < item.price ? (
            <p>
              <span className="line-through text-gray-500 mr-2">Kr {item.price}</span>
              <span className="text-green-500 font-bold">Kr {item.discountedPrice}</span>
            </p>
          ) : (
            <p>Kr {item.price}</p>
          )}
        </div>
      </div>

      <div className="flex items-center">
        {item.quantity > 1 && (
          <button
            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
            className="text-black"
          >
            <Minus size={16} />
          </button>
        )}
        <span className="px-4">{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="text-black">
          <Plus size={16} />
        </button>
      </div>

      <button onClick={() => handleRemoveFromCart(item.id)} className="bg-green-500 text-white p-2 rounded">
        <Trash2 size={20} />
      </button>
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
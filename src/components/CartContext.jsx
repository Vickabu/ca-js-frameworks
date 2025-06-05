/**
 * Cart context for managing a shopping cart.
 *
 * Exports:
 * - CartProvider: React Context Provider that wraps children components and provides cart state and actions.
 * - UseCart: Custom hook to access cart state and functions.
 *
 * @typedef {Object} CartItem
 * @property {string|number} id - Unique product ID
 * @property {string} [title] - Name or title of the product
 * @property {number} quantity - Number of items in the cart
 * @property {any} [rest] - Any additional product data
 *
 * @function CartProvider
 * @param {Object} props
 * @param {React.ReactNode} props.children - Components that consume the cart context
 * @returns {JSX.Element}
 *
 * @function addToCart
 * @param {CartItem} product - Product to add to the cart
 *
 * @function removeFromCart
 * @param {string|number} id - ID of the product to remove
 *
 * @function updateQuantity
 * @param {string|number} id - ID of the product to update
 * @param {number} newQuantity - New quantity (must be > 0)
 *
 * @function clearCart
 * Clears all items from the cart
 *
 * @function UseCart
 * @returns {{
 *   cart: CartItem[],
 *   addToCart: function,
 *   removeFromCart: function,
 *   updateQuantity: function,
 *   clearCart: function
 * }}
 */

import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error('Invalid product data:', product);
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UseCart = () => useContext(CartContext);

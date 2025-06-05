/**
 * @file ProductPage renders a detailed view of a single product,
 * including description, price (with discount logic), reviews, and add-to-cart functionality.
 * It fetches product data using the `useFetch` hook based on the product ID from the route params.
 */

import { useParams } from 'react-router-dom';
import { UseCart } from '../components/CartContext';
import Ratings from '../components/Ratings';
import Button from '../components/Button';
import Reviews from '../components/Reviews';
import { useFetch } from '../hooks/useFetch';
import { API_SHOP } from '../api/constants';

function ProductPage() {
  const { id } = useParams();
  const { addToCart, cart } = UseCart();

  const { data: product, loading, error } = useFetch(`${API_SHOP}/${id}`);
  const cartItem = cart.find((item) => item.id === id);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (!product) {
      console.error('Product is null, cannot add to cart');
      return;
    }
    addToCart(product);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="flex items-center">
      <div className="py-5 md:p-5 shadow-xl rounded">
        <div className="flex flex-col md:flex-row gap-5 md:gap-[50px] xl:gap-[100px] mt-5 md:mt-10 mb-5 mx-5">
          <div className="w-full h-[350px] md:h-[460px] md:max-w-[400px] overflow-hidden rounded">
            <img
              src={product.image.url}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:max-w-[400px] w-full">
            <div className="flex flex-col gap-5 pb-2 border-b border-[#BDBDBD]">
              <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold">
                {product.title}
              </h1>
              <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Reviews reviews={product.reviews} />
              <div className="flex mb-auto">
                <Ratings rating={product.rating} />
              </div>
            </div>

            <div className="flex flex-col gap-3 items-end mt-auto">
              <div className="text-right">
                {product.discountedPrice &&
                product.discountedPrice < product.price ? (
                  <p className="flex flex-col">
                    <span className="line-through text-gray-500 text-[12px] md:text-[14px] lg:text-[16px]">
                      Kr {product.price}
                    </span>
                    <span>
                      {' '}
                      -{' '}
                      {Math.round(
                        ((product.price - product.discountedPrice) /
                          product.price) *
                          100
                      )}
                      %
                    </span>
                    <span className="text-green-600 font-bold text-[16px] md:text-[18px] lg:text-[20px]">
                      Kr {product.discountedPrice}
                    </span>
                  </p>
                ) : (
                  <p className="text-lg font-bold text-[20px]">
                    Kr {product.price}
                  </p>
                )}
              </div>
              <div>
                <Button
                  text="Add to Cart"
                  onClick={handleAddToCart}
                  variant="primary"
                  className="w-full"
                />
              </div>
              {cartQuantity === 0 ? null : (
                <p className="text-[12px] md:text-[16px] lg:text-[18px]">
                  Added to cart: {cartQuantity}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

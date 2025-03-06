import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UseCart } from "../components/CartContext";
import Ratings from "../components/Ratings";
import Button from "../components/Button";
import Reviews from "../components/Reviews";

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = UseCart();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) {
      console.error("Product is null, cannot add to cart");
      return;
    }
    addToCart(product);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="flex items-center">
      <div className="flex flex-col md:flex-row gap-5 md:gap-[50px] xl:gap-[100px] mt-10 mx-5">
        <div className="w-full h-[350px] md:h-[460px] md:max-w-[400px] overflow-hidden rounded">
          <img src={product.image.url} alt={product.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col max-w-[400px] w-full">
          <div className="flex flex-col gap-5 pb-2 border-b border-[#BDBDBD]">
            <h1 className="text-[18px] md:text-[24px] lg:text-[32px] font-bold">{product.title}</h1>
            <p className="text-[12px] md:text-[16px] lg:text-[18px]">{product.description}</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <Reviews reviews={product.reviews}/>
            <div className="flex mb-auto">
              <Ratings rating={product.rating}/>
            </div>
          </div>  
            
          <div className="flex flex-col gap-3 items-end mt-auto">
            <div className="text-right">
              {product.discountedPrice && product.discountedPrice < product.price ? (
                <p className="flex flex-col">
                  <span className="line-through text-[#BDBDBD] text-[12px] md:text-[14px] lg:text-[16px]">Kr {product.price}</span>
                  <span className="text-green-600 font-bold text-[16px] md:text-[18px] lg:text-[20px]">Kr {product.discountedPrice}</span>
                </p>
              ) : (
                <p className="text-lg font-bold text-[20px]">Kr {product.price}</p>
              )}
            </div>
            <div>
              <Button text="Add to Cart" onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>    
    </div>    
  );
}

export default ProductPage;

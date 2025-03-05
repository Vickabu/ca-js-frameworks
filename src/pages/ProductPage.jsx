import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Ratings from "../components/Ratings";
import Button from "../components/Button";

function ProductPage() {
  const { id } = useParams(); 
  console.log("Product ID:", id);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data.data);
        console.log(data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  const addToCart = () => {
    setCart([...cart, product]);
    console.log("Cart", [...cart, product]);
  }

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="flex">
      <div className="w-full h-[460px] max-w-[400px] overflow-hidden rounded-t">
        <img src={product.image.url} alt={product.title} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[400px] w-full bg-pink-200">
        <h1>{product.title}</h1>
        
        <div className="mt-2">
          {product.discountedPrice && product.discountedPrice < product.price ? (
            <p className="flex flex-col">
              <span className="line-through text-gray-500 text-[16px]">Kr {product.price}</span>
              <span className="text-green-600 font-bold text-[20px]">Kr {product.discountedPrice}</span>
            </p>
          ) : (
            <p className="text-lg font-bold text-[20px]">Kr {product.price}</p>
          )}
        </div>

        <div className="mt-auto">
          <Ratings rating={product.rating} />
        </div>
        <div>
          <Button text="Add to Cart" onClick={addToCart} />
        </div>
      </div>
      
    </div>
  );
}

export default ProductPage;

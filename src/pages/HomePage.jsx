import { useEffect, useState } from 'react'
import Ratings from '../components/Ratings';

const url = 'https://v2.api.noroff.dev/online-shop';

function HomePage() {
  const [products, setProducts] = useState([]);
  console.log('products',products);
  
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      
      setProducts(data.data);
    }
    getProducts()
  }, []);
  
  return (
    <div className='grid grid-cols-3 gap-4 mt-10'>
      {products.map((product) => {
        return (
          <div key={product.id} className='border rounded'>
            <div className='max-w-[320px] h-[210px] overflow-hidden'>
              <img src={product.image.url} alt={product.title} className='w-full h-full object-cover'/>
            </div>
            <div>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p>${product.discountedPrice ?? product.price}</p>
              <Ratings rating={product.rating} />
            </div>
          </div>
        )
      })}
    </div>
  )
  
}

export default HomePage;
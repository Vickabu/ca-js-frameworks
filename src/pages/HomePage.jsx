import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductListCard';

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
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
  </div>
  )
}

export default HomePage;
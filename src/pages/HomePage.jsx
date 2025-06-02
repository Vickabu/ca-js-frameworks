import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductListCard from '../components/ProductListCard';
import { useFetch } from '../hooks/useFetch';
import { API_SHOP } from '../api/constants';



function HomePage() {
  const { data: products = [], loading, error } = useFetch(API_SHOP);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="mt-10 max-w-[1440px] w-full mx-5">
      <SearchBar onSearch={setSearchQuery} />

      {loading && <p className="text-center">Loading products...</p>}
      {error && (
        <p className="text-center text-red-500">
          Oops, we are a bit lazy today - hold your horses, reload and we will
          try catching up! {error}
        </p>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductListCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-3">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;

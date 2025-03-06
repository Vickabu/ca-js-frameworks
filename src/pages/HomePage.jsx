import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductListCard from "../components/ProductListCard";

const url = "https://v2.api.noroff.dev/online-shop";

function HomePage() {
  const [products, setProducts] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.data);
    }
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10 max-w-[1440px] w-full mx-5">
      <SearchBar onSearch={setSearchQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductListCard key={product.id} product={product} />)
        ) : (
          <p className="text-center col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;

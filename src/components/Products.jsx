import { useQuery } from "react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";

// Firebase DB에서 products 정보 get 해서 caching 해두는 역할 하는 Component
export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>{error}</p>}
      <ul className="grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 xl:p-6 2xl:p-8">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

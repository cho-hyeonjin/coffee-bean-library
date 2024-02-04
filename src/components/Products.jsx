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
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

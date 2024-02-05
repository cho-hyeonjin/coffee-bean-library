import { useQuery } from "react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  console.log(products, "products");
  console.log(typeof products, "어레이?");
  console.log(Array.isArray(products), "어레이?");

  if (isLoading) return <p>로딩 중...</p>;

  const hasProducts = products && products.length > 0;

  return (
    <>
      <section>
        <p>나의 원두 서재</p>
        {/* ↓ 원인은 여기..(이게 왜 여깄지?ㅋㅋㅠ) 어쨋든 객체를 쌩으로 렌더링하려 해서 생긴 문제임 */}
        {/* {products} */}
        {!hasProducts && <p>서재에 담아둔 원두가 없습니다.</p>}
        {hasProducts && (
          <>
            <ul>
              {products &&
                products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}

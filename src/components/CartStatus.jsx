import { useQuery } from "react-query";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));

  return (
    <>
      <div className="relative">
        <p className="pr-7">나의 원두 서재</p>
        {products && (
          <p className="w-5 h-5 mr-5 text-center leading-4 bg-black font-bold text-white rounded-full absolute -top-0.5 -right-4">
            {products.length}
          </p>
        )}
      </div>
    </>
  );
}

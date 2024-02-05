import { useQuery } from "react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";
import ReportingCard from "../components/ReportingCard";

export default function Cart() {
  const { user, uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>로딩 중...</p>;

  const hasProducts = products && products.length > 0;

  console.log(user, "유저정보");
  // blendType 계산
  const blendTypeCounts = products.reduce((acc, product) => {
    acc[product.blendType] = (acc[product.blendType] || 0) + 1;
    return acc;
  }, {});

  // 가장 많은 blendType 찾기
  const prefrredBlendType = Object.keys(blendTypeCounts).reduce((a, b) =>
    blendTypeCounts[a] > blendTypeCounts[b] ? a : b
  );

  // brandName 계산
  const brandNameCounts = products.reduce((acc, product) => {
    acc[product.brandName] = (acc[product.brandName] || 0) + 1;
    return acc;
  }, {});

  // 가장 많은 brandName 찾기
  const preferredBrand = Object.keys(brandNameCounts).reduce((a, b) =>
    brandNameCounts[a] > brandNameCounts[b] ? a : b
  );
  console.log(prefrredBlendType, preferredBrand);

  return (
    <>
      <section className="p-8">
        <p className="font-bold pb-4 text-center border-b border-gray-300">
          나의 원두 서재
        </p>
        <div className="flex flex-col gap-5 justify-center items-center md:px-8 lg:px-16 border-b border-gray-300 mb-8 p-6 px-8">
          <div className="font-bold">{user.displayName} 님의 선호도 리포팅</div>
          <div className="flex justify-evenly items-center">
            <ReportingCard
              className="shrink-0"
              title="브랜드"
              content={preferredBrand}
            />
            <ReportingCard
              className="shrink-0"
              title="원두 타입"
              content={prefrredBlendType}
            />
          </div>
        </div>
        {!hasProducts && <p>서재에 담아둔 원두가 없습니다.</p>}
        {hasProducts && (
          <>
            <ul>
              {products &&
                products.map((product) => (
                  <CartItem key={product.id} product={product} uid={uid} />
                ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}

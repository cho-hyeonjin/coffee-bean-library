import { Link, useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: {
      product: {
        image,
        brandName,
        productName,
        blendType,
        price,
        options,
        description,
        id,
      },
    },
  } = useLocation();

  const handleAddCart = (e) => {
    // 서재(장바구니)에 추가 로직 - Firebase DB CRUD - 구현
    console.log(e, "'내 서재에 담기' 버튼 클릭 이벤트 발생!");
  };

  const handelGoToBrand = (e) => {
    console.log(e, "'구매 사이트로 이동' 버튼 클릭 이벤트 발생!");
  };

  return (
    <>
      <div className="py-20 px-10 md:px-20 lg:px-40 2xl:px-60">
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-2 justify-center items-center">
          <img src={image} alt={productName} className="flex-none" />
          <div className="lg:mx-16 lg:text-lg">
            <p className="font-bold my-4">{brandName}</p>
            <p className="font-bold my-4">{productName}</p>
            <p className="my-4">
              {`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`}
            </p>
            <hr />
            <p className="my-4">{description}</p>
            <hr />
            <p className="my-4">원두 타입: {blendType}</p>
            <hr />
            <div className="my-4">
              {/* {options ??
              options.map((option, index) => <p key={index}>{option}</p>)} */}
              <p>{options[0]}</p>
              <p>{options[2]}</p>
              <p>{options[3]}</p>
              <p>{options[4]}</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <Button
                text={"나의 원두 서재에 담기"}
                tailwindcss={
                  "bg-black text-white px-4 py-2 hover:font-extrabold"
                }
                onClick={handleAddCart}
              />
              <Button
                text={"구매 사이트로 이동"}
                tailwindcss={
                  "bg-black text-white  px-4 py-2 hover:font-extrabold"
                }
                onClick={handelGoToBrand}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

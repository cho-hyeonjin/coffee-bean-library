import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
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
}) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => {
          navigate(`/products/${id}`, { state: { product } });
        }}
      >
        <li className="pl-2 pb-2 hover:cursor-pointer hover:shadow-md hover:shadow-zinc-500 hover:brightness-125 hover:duration-700">
          <img className="w-full" src={image} alt={productName} />
          <div className="mt-3">
            <h3 className="text-base font-bold xl:text-lg 2xl:text-xl">
              {productName}
            </h3>
            <h3 className="text-base xl:text-lg 2xl:text-xl">{brandName}</h3>
            <p className="text-sm xl:text-base 2xl:text-lg">{blendType}</p>
            <p className="text-sm xl:text-base 2xl:text-lg">
              {`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
            </p>
          </div>
        </li>
      </div>
    </>
  );
}

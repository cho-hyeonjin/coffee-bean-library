export default function ProductCard({
  product: {
    image,
    brandName,
    productName,
    blendType,
    price,
    options,
    description,
  },
}) {
  return (
    <>
      <div>
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

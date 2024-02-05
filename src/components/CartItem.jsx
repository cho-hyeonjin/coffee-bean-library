import Button from "./ui/Button";

export default function CartItem({
  product,
  product: { id, imageURL, brandName, productName, blendType, price, buyURL },
}) {
  const handleDelete = () => {};

  return (
    <>
      <li>
        <img src={imageURL} alt={productName} />
        <div>
          <p>{brandName}</p>
          <p>{productName}</p>
          <p>{blendType}</p>
          <p>{price}</p>
          <Button
            text={"나의 원두 서재에서 삭제"}
            tailwindcss={"bg-black text-white px-4 py-2 hover:font-extrabold"}
            onClick={handleDelete}
          ></Button>
        </div>
      </li>
    </>
  );
}

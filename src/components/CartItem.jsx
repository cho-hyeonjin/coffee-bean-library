import { deleteFromCart } from "../api/firebase";
import Button from "./ui/Button";

export default function CartItem({
  product,
  product: { id, imageURL, brandName, productName, blendType, price, buyURL },
  uid,
}) {
  const handleDelete = () => deleteFromCart(uid, id);
  return (
    <>
      <li className="flex justify-between my-2 items-center">
        <img className="w-24 md:w-48" src={imageURL} alt={productName} />
        <div className="flex-1 flex justify-between ml-4">
          <p>{brandName}</p>
          <p>{productName}</p>
          <p>{blendType}</p>
          <p>{price}</p>
          <div className="text-2xl flex items-center">
            <Button
              text={"삭제"}
              tailwindcss={
                "bg-black text-white text-sm px-4 py-2 w-50 hover:font-extrabold"
              }
              onClick={handleDelete}
            ></Button>
          </div>
        </div>
      </li>
    </>
  );
}

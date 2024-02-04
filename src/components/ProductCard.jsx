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
      <li>{productName}</li>
    </>
  );
}

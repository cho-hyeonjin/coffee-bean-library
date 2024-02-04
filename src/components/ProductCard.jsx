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
      <li>
        <img src={image} alt={productName} />
        <div>
          <h3>브랜드명: {brandName}</h3>
          <h3>제품명: {productName}</h3>
          <p>타입: {blendType}</p>
          <p>가격: {`${price} 원`}</p>
        </div>
      </li>
    </>
  );
}

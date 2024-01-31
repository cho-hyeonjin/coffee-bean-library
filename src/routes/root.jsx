export default function Root() {
  return (
    <>
      <div id="navbar">
        <h1>커피빈샵</h1>
        <nav>
          <ul>
            <li>
              <a href={`/AllProducts`}>전체 상품</a>
            </li>
            <li>
              <a href={`/RecommendProducts`}>추천 상품</a>
            </li>
            <li>
              <a href={`/Cart`}>장바구니</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

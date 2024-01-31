import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div id="navbar">
        <h1>커피빈샵</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>홈 페이지</Link>
            </li>
            <li>
              <Link to={`/products`}>전체 상품 페이지</Link>
            </li>
            <li>
              <Link to={`/products/recommend`}>추천 상품 페이지</Link>
            </li>
            <li>
              <Link to={`/products/:id`}>상품 상세 페이지</Link>
            </li>
            <li>
              <Link to={`/cart`}>장바구니 페이지</Link>
            </li>
          </ul>
        </nav>
        {/* 하위 경로로 설정한 컴포넌트를 보여줄 html 위치에 Outlet 컴포넌트를 배치한다.*/}
        {/* Outlet 컴포넌트는 root 경로 하위 경로에 설정한 컴포넌트를 렌더링 할 위치를 알려주는 React Router 제공 컴포넌트  */}
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

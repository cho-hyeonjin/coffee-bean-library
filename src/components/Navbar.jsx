import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between">
        <Link to="/">
          <h1>커피빈샵(🧭네비게이션바)</h1>
        </Link>
        <nav>
          <Link to="/products">🙋🏻‍♀️전체 상품</Link>
          <Link to="/products/recommend">💁🏻‍♀️추천 상품</Link>
          <Link to="/cart">🛒장바구니</Link>
          <button>가입</button>
          <button>로그인</button>
        </nav>
      </header>
    </>
  );
}

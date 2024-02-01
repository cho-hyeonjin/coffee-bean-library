import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between border-b border-gray-300 py-2 px-6">
        <Link
          to="/"
          className="align-center items-center text-3xl font-semibold"
        >
          <h1>Coffee Bean Library</h1>
        </Link>
        <nav className="flex align-center items-center gap-40">
          <Link to="/products">전체 상품</Link>
          <Link to="/products/recommend">추천 상품</Link>
          <Link to="/products/recommend">입점 브랜드</Link>
        </nav>
        <nav className="flex align-center items-center gap-6">
          <Link to="/cart">장바구니</Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/signin">로그인</Link>
        </nav>
      </header>
    </>
  );
}

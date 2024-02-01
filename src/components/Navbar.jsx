import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between border-b border-gray-300 py-4 px-10">
        <Link
          to="/"
          className="align-center items-center text-2xl font-semibold"
        >
          <h1>Coffee Bean Library</h1>
        </Link>
        <nav className="flex align-center items-center gap-12 text-sm">
          <Link to="/about">사서 소개</Link>
          <Link to="/products">전체 상품</Link>
          <Link to="/products/recommend">추천 상품</Link>
          <Link to="/products/brand">브랜드별 상품</Link>
        </nav>
        <nav className="flex align-center items-center gap-6 text-xs">
          <button>🔍</button>
          <Link to="/signin">로그인</Link>
          <Link to="/cart" className="flex">
            <div>장바구니</div>
            <div className="rounded-full bg-black text-white px-1 mx-1">0</div>
          </Link>
        </nav>
      </header>
    </>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navbar() {
  const { user, logIn, logOut } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between border-b border-gray-300 py-4 px-6 lg:px-10">
        <Link
          to="/"
          className="align-center items-center text-2xl font-semibold shrink-0"
        >
          <h1>Coffee Bean Library</h1>
        </Link>
        {/* 모바일용 햄버거 메뉴 아이콘 */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 focus:outline-none focus:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* 네비게이션 링크 */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-16 ml-0 lg:ml-20 text-sm shrink-0`}
        >
          {/* <Link to="/about">소개</Link> */}
          <Link to="/products">전체 원두</Link>
          {/* <Link to="/products/recommend">추천 원두</Link> */}
          {/* <Link to="/products/brand">브랜드별 원두</Link> */}
        </nav>
        {/* 추가 링크 및 버튼 */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-4 ml-0 lg:ml-20 text-sm shrink-0`}
        >
          {user && user.isAdmin && (
            <Link to="/products/create">게시물 생성</Link>
          )}
          {user && (
            <Link to="/cart">
              <CartStatus />
            </Link>
          )}
          <div className="">
            {!user && <Button text={"로그인"} onClick={logIn} />}
            {user && <Button text={"로그아웃"} onClick={logOut} />}
          </div>
        </nav>
      </header>
    </>
  );
}

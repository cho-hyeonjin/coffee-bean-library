import { Link } from "react-router-dom";
// import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navbar() {
  const { user, logIn, logOut } = useAuthContext();
  return (
    <>
      <header className="flex justify-between border-b border-gray-300 py-4 px-10">
        <Link
          to="/"
          className="align-center items-center text-2xl font-semibold shrink-0"
        >
          <h1>Coffee Bean Library</h1>
        </Link>
        <nav className="flex align-center items-center gap-16 ml-20 text-sm shrink-0">
          <Link to="/about">사서 소개</Link>
          <Link to="/products">전체 원두</Link>
          <Link to="/products/recommend">이달의 추천 원두</Link>
          <Link to="/products/brand">브랜드별 원두</Link>
        </nav>
        <nav className="flex align-center items-center gap-4 ml-20 text-xs shrink-0">
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

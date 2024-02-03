import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logIn, logOut, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <>
      <header className="flex justify-between border-b border-gray-300 py-4 px-10">
        <Link
          to="/"
          className="align-center items-center text-2xl font-semibold shrink-0"
        >
          <h1>Coffee Bean Library</h1>
        </Link>
        <nav className="flex align-center items-center gap-16 text-sm shrink-0">
          <Link to="/about">사서 소개</Link>
          <Link to="/products">전체 원두</Link>
          <Link to="/products/recommend">이달의 추천 원두</Link>
          <Link to="/products/brand">브랜드별 원두</Link>
        </nav>
        <nav className="flex align-center items-center gap-4 text-xs shrink-0">
          <Button text={"🔍"} />
          {user && user.isAdmin && (
            <Link to="/products/create">게시물 생성</Link>
          )}
          <div className="flex align-center items-center gap-2 shrink-0">
            {!user && <Button text={"로그인"} onClick={logIn} />}
            {user && <User user={user} />}
            {user && <Button text={"로그아웃"} onClick={logOut} />}
          </div>
          {user && (
            <Link to="/cart" className="flex">
              <Button text={"나의 관심 원두"} />
              <div className="rounded-full bg-black text-white px-1 mx-1">
                0
              </div>
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}

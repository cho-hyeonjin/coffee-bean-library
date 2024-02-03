import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 1. react-router-dom에서 createBrowserRouter 메서드와 RootProvider를 import해주고
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import AllProducts from "./pages/AllProducts";
import RecommendProducts from "./pages/RecommendProducts";
import BrandProducts from "./pages/BrandProducts";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";
import Cart from "./pages/Cart";

// 2. createBrowserRouter 메서드의 파라미터로 route 객체를 담은 배열을 전달해서 router를 생성해준다.
const router = createBrowserRouter([
  // 3. 레지스트리에 첫번째 루트 객체를 등록한다.
  {
    path: "/", // root 경로("/")에서
    element: <App />, // <Root /> 컴포넌트가 보여지게 매핑
    errorElement: <NotFound />, // 루트 경로 오류 발생 시 <ErrorPage /> 컴포넌트가 보여지게 매핑
    // 4. children 속성을 이용하여 중첩 경로로 '전체 상품' View 컴포넌트를 root 경로 하위 경로에 등록해준다.
    children: [
      {
        // 5. Index Route로 Home 컴포넌트를 설정하였다.
        index: "true",
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/recommend",
        element: <RecommendProducts />,
      },
      {
        path: "/products/brand",
        element: <BrandProducts />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products/create",
        element: <CreateProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* RouterProvider로 Unbrella Context를 생성하여 router를 prop으로 내려준다.*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

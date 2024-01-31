import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 1. react-router-dom에서 createBrowserRouter 메서드와 RootProvider를 import해주고
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";

// 2. createBrowserRouter 메서드의 파라미터로 route 객체를 담은 배열을 전달해서 router를 생성해준다.
const router = createBrowserRouter([
  // 3. 레지스트리에 첫번째 루트 객체를 등록한다.
  {
    // 이 레지스트리 객체에서는 root 경로("/")에 <Root /> 컴포넌트가 보여지게 매핑한다.
    path: "/",
    //
    element: <Root />,
    // 루트 경로 오류 발생 시 <ErrorPage /> 컴포넌트가 보여지게 매핑
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* RouterProvider로 Unbrella Context를 생성하여 router를 prop으로 내려준다.*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

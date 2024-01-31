import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>😨 안타깝지만 에러 발생</h1>
      <h3>내가 받은 error 객체에서 몇 가지 정보 꺼내서 보여줄게.</h3>
      <p>error.status 상태코드야. 👉🏻 {error.status}</p>
      <p>error.statusText 상태메시지고 👉🏻 {error.statusText}</p>
      <p>error.data 데이터 👉🏻 {error.data}</p>
      <p>✅ 개발자 도구 Network탭에서 살펴봐.</p>
    </div>
  );
}

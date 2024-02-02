import { signin } from "../api/firebase";

export default function SignIn() {
  return (
    <>
      <div>🔐로그인 페이지</div>
      <button onClick={() => signin()}>로그인 submit 버튼</button>
    </>
  );
}

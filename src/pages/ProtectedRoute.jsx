export default function ProtectedRoute({ children, requireAdmin }) {
  // 이 컴포넌트는 Admin 권한이 있는 사람만 해당 route에 접근할 수 있게 하는 컴포넌트로,
  // 1. 로그인한 사용자 있는지 확인
  // 2. 로그인한 사용자가 있다면 ? admin에 포함된 uid를 가진 사용자인지 확인
  // 3. Admin이라면 ? user 값이 !falsy && admin에 포함된 uid 값을 가지고 있음
  // 4. 로그인 되어있고, Admin이면 children으로 설정한 컴포넌트 보여줌
  // 5. 로그인 되어있지 않거나, Admin이 아니면 상위 경로로 라우팅
  return (
    <>
      <div></div>
    </>
  );
}

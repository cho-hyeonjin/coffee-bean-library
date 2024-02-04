export default function Banner() {
  return (
    <section className="h-72 relative">
      <div className="w-full h-full bg-cover bg-banner brightness-90"></div>
      <div className="absolute w-full top-32 text-center text-white">
        <p className="pb-2">취향에 맞는 책을 고르듯</p>
        <p className="text-2xl">커피 라이브러리</p>
      </div>
    </section>
  );
}

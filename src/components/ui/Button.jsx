export default function Button({ text, onClick }) {
  return (
    <>
      <button
        className="hover:font-bold hover:underline hover:underline-offset-1"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

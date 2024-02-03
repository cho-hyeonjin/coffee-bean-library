export default function Button({ text, onClick, tailwindcss }) {
  return (
    <>
      <button
        // className="hover:font-bold hover:underline hover:underline-offset-1"
        className={tailwindcss}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

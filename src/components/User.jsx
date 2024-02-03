export default function User({ user: { photoURL, displayName } }) {
  return (
    <>
      <div>
        <img
          src={photoURL}
          alt={displayName}
          className="w-6 h-6 rounded-full"
        />
      </div>
    </>
  );
}

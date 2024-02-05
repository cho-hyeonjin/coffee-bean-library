export default function ReportingCard({ title, content }) {
  return (
    <div className="bg-gray-50 p-4 mx-2 text-center text-sm">
      <p>{title}</p>
      <p className="font-bold mt-2">{content}</p>
    </div>
  );
}

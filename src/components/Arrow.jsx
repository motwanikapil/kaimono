export default function Arrow({ children, onClick }) {
  return (
    <button onClick={onClick} className="rounded-full bg-gray-200 p-2">
      {children}
    </button>
  );
}

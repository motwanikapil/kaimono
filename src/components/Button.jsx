export default function Button({ children, onClick }) {
  return (
    <button
      className="mt-5 rounded-md bg-blue-500 px-5 py-2.5 text-white transition-all duration-200 hover:bg-blue-600 hover:underline"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

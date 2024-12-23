export default function EmptyFillButton({ children }) {
  return (
    <button className="rounded-lg border-2 border-black px-6 py-3 transition-all duration-300 hover:bg-black hover:text-white">
      {children}
    </button>
  );
}

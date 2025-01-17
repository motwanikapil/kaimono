import { Link } from "react-router-dom";

export default function Button({ children, onClick, type = "button", to }) {
  const className =
    "mt-5 rounded-md bg-blue-500 px-5 py-2.5 text-white transition-all duration-200 hover:bg-blue-600 hover:underline";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}

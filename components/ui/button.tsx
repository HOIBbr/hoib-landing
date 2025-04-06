
export function Button({ children, ...props }) {
  return (
    <button {...props} className="px-6 py-3 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition">
      {children}
    </button>
  );
}

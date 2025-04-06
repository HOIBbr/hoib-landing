
export function Input(props) {
  return (
    <input
      {...props}
      className={`px-4 py-3 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black ${props.className || ''}`}
    />
  );
}

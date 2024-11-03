export default function Card({ children }) {
  return (
    <div className="border border-stone-800 mx-4 p-8 rounded-lg text-center shadow-md w-96 space-y-4">
      {children}
    </div>
  );
}

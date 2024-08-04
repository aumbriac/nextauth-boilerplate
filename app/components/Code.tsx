export default function Code(props) {
  return (
    <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">
      {props.children}
    </code>
  );
}

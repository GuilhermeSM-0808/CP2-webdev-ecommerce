export default function Secao({ title, children }) {
  return (
    <div className="bg-blue-200 p-4 m-6 rounded-lg shadow transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <h5>Produtos em destaque</h5>
      {children}
    </div>
  );
}

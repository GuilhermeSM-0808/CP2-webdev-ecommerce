import { Link } from "react-router-dom"

export default function Card({ title, value, image }) {
  return (
        <div className="bg-white p-4 m-4 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <img src={image} alt=""/>
            <p className="text-gray-700">R$ {value}</p>
        </div>
  );
}

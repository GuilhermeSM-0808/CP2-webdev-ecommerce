import { useParams } from "react-router-dom";

export default function Produto() {

    const params = useParams();
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Produto #{params}</h2>
        

    </div>
  );
}

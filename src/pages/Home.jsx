import { useEffect, useState } from "react";
import Secao from "../components/Secao";
import Card from "../components/Card";



export default function Home() {

  const apiUrl = import.meta.env.VITE_API_URL;

  const [eletronicos, setEletronicos] = useState([]);
  const [roupas, setRoupas] = useState([]);
  const [joias, setJoias] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}category/electronics`)
    .then((res) => res.json())
    .then((data) => setEletronicos(data));
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}category/men's clothing`)
    .then((res) => res.json())
    .then((data) => setRoupas(data));
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}category/jewelery`)
    .then((res) => res.json())
    .then((data) => setJoias(data));
  }, []);
  

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <Secao title={"Eletronicos"}>
          {eletronicos.map((pegaItem) => 
            <Card key={pegaItem.id} title={pegaItem.title} value={pegaItem.price} image={pegaItem.image}></Card>
          )}
        </Secao>
        <Secao title={"Roupas"}>
          {roupas.map((pegaItem) => 
            <Card key={pegaItem.id} title={pegaItem.title} value={pegaItem.price} image={pegaItem.image}></Card>
          )}
        </Secao>
        <Secao title={"Joias"}>
          {joias.map((pegaItem) => 
            <Card key={pegaItem.id} title={pegaItem.title} value={pegaItem.price} image={pegaItem.image}></Card>
          )}
        </Secao>
    </div>
  );
}

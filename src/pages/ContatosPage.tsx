import React, { useEffect, useState } from "react";
import axios from "axios";

type Contato = {
  id: number;
  name: string;
  email: string;
  telefone: string;
  endereco: string;
};

export default function ContatosPage() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://backend-express-postgresq1.vercel.app/contato", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setContatos(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Lista de Contatos</h1>
      <div className="bg-white rounded shadow-md p-8 w-full max-w-3xl">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Nome</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Telefone</th>
              <th className="py-2 px-4 border-b text-left">Endereco</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato) => (
              <tr key={contato.id}>
                <td className="py-2 px-4 border-b">{contato.name}</td>
                <td className="py-2 px-4 border-b">{contato.email}</td>
                <td className="py-2 px-4 border-b">{contato.telefone}</td>
                <td className="py-2 px-4 border-b">{contato.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

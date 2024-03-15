import React, { useEffect, useState } from "react";
import "./ListaDeMusicas.css";

function ListaDeMusicas() {
  const [musicas, setMusicas] = useState([]);

  // Função para buscar as músicas ao carregar o componente
  useEffect(() => {
    const fetchMusicas = async () => {
      try {
        // Ajuste o endereço conforme necessário, aqui estamos usando o mesmo domínio e porta
        const response = await fetch("localhost:5500/musicas");
        if (!response.ok) {
          throw new Error("Dados não puderam ser carregados");
        }
        const data = await response.json();
        setMusicas(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
      }
    };

    fetchMusicas();
  }, []); // O array vazio garante que o efeito será executado apenas uma vez após o primeiro render

  console.log(musicas);
  if (musicas.length > 0) {
    return (
      <div className="musicas_encontradas">
        <h1>Lista de Músicas:</h1>
        <ul>
          {musicas.map((musica, index) => (
            <li key={index}>
              {musica.nome} por {musica.cantor} - Lançada em:{" "}
              {musica.dataLancamento} - Visualizações: {musica.visualizacoes}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de músicas</h1>
      <h3>Não há músicas cadastradas</h3>
    </div>
  );
}

export default ListaDeMusicas;

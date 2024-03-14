// Importe as bibliotecas necessárias
import { useEffect, useState } from "react";
import { MusicService } from "../service/musicas";

// Crie a página de ver músicas
export default function VerMusicas() {
  // cria o tipo 'Music' para verificar os dados vindos da api
  interface Music {
    nome: string;
    cantor: string;
    data: Date;
    visualizacoes: number;
  }

  // Defina o estado para armazenar as músicas como um array de objetos Music
  const [musicas, setMusicas] = useState<Music[]>([]);

  // Crie uma instância da classe MusicService
  const musicService = new MusicService();

  // Função para buscar as músicas da API
  async function buscarMusicas() {
    try {
      // Chame a função para buscar as músicas da API
      const musicasData = await musicService.fetchMusicData();
      // Atualize o estado com os dados das músicas
      setMusicas(musicasData);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    }
  }

  // Use o hook useEffect para buscar as músicas quando a página carregar
  useEffect(() => {
    buscarMusicas();
  }, []);

  // Renderize as músicas na página
  return (
    <div className="div">
      <h1>Músicas Cadastradas</h1>
      <ul>
        {musicas.map((musica, index) => (
          <li key={index}>
            <p>Nome: {musica.nome}</p>
            <p>Cantor: {musica.cantor}</p>
            {/* Formatando a data */}
            <p>Data: {new Date(musica.data).toLocaleDateString()}</p>
            <p>Visualizações: {musica.visualizacoes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import axios, { AxiosResponse } from "axios";

// cria o tipo 'Music' para verificar os dados vindos da api
interface Music {
  nome: string;
  cantor: string;
  data: Date;
  visualizacoes: number;
}

export class MusicService {
  // Defina a função para buscar músicas da API
  async fetchMusicData(): Promise<Music[]> {
    try {
      // Faça uma requisição GET para a rota da API que retorna as músicas
      const response: AxiosResponse<Music[]> = await axios.get<Music[]>(
        "http://[endereço_IP_da_sua_instância_EC2]/musicas"
      );
      // Retorne os dados das músicas da resposta da API
      return response.data;
    } catch (error) {
      // Em caso de erro, você pode tratar ou lançar uma exceção
      console.error("Erro ao buscar músicas:", error);
      throw new Error("Erro ao buscar músicas");
    }
  }

  // Função para cadastrar uma nova música
  async addMusic(newMusic: Music): Promise<void> {
    try {
      await axios.post(
        "http://[endereço_IP_da_sua_instância_EC2]/musicas",
        newMusic
      );
    } catch (error) {
      console.error("Erro ao cadastrar música:", error);
      throw new Error("Erro ao cadastrar música");
    }
  }
}

import styles from "./page.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { MusicService } from "../service/musicas";
import Link from "next/link"; // Importe o componente Link do Next.js

export default function Home() {
  const [newMusic, setNewMusic] = useState({
    nome: "",
    cantor: "",
    data: new Date(),
    visualizacoes: 0,
  });

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    try {
      const musicService = new MusicService();
      await musicService.addMusic(newMusic); // Chama a função de cadastro de música
      alert("Música cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar música:", error);
      alert(
        "Erro ao cadastrar música. Verifique o console para mais detalhes."
      );
    }
  };

  // Função para atualizar o estado do formulário com os dados inseridos pelo usuário
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewMusic((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Cadastrar músicas</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="singer"
          placeholder="Cantor"
          required
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Data"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="views"
          placeholder="Visualizações"
          required
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {/* Adicione o Link para a página de ver músicas */}
      <Link href="/ver-musicas">
        <button>Ver músicas</button>
      </Link>
    </main>
  );
}

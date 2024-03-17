// Importe useState de 'react'
import React, { useState } from "react";
import "./Formulario.css";

function FormularioMusica() {
  const [nome, setNome] = useState("");
  const [cantor, setCantor] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [visualizacoes, setVisualizacoes] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envia uma requisição POST para o backend
      const response = await fetch(
        "http://http://ec2-52-91-146-65.compute-1.amazonaws.com:5500/musicas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, cantor, data, visualizacoes }),
        }
      );

      if (response.ok) {
        // Trata a resposta do servidor
        console.log("Música cadastrada com sucesso!");
        // Limpa o formulário após o envio
        setNome("");
        setCantor("");
        setDataLancamento("");
        setVisualizacoes("");
      } else {
        // Trata os erros de resposta
        console.error("Falha ao cadastrar música.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados para o servidor:", error);
    }
  };

  // Formulário JSX como antes
  return (
    <>
      <h1>Cadastrar músicas:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Música:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Cantor:
          <input
            type="text"
            value={cantor}
            onChange={(e) => setCantor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Data de Lançamento:
          <input
            type="date"
            value={dataLancamento}
            onChange={(e) => setDataLancamento(e.target.value)}
          />
        </label>
        <br />
        <label>
          Visualizações:
          <input
            type="number"
            value={visualizacoes}
            onChange={(e) => setVisualizacoes(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default FormularioMusica;

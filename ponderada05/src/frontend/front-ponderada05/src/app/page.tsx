import styles from './page.module.css';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.div}>
      <form className={styles.form}>
        <h1>Adicionar músicas</h1>
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Cantor" required />
        <input type="date" placeholder="Data" required />
        <input type="number" placeholder="Visualizações" required />
        <button type="submit">Adicionar Música</button>
      </form>
    </div>
  );
}

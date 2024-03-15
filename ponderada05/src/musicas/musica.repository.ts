import { Injectable, Inject } from '@nestjs/common';
import { Pool, QueryResult } from 'pg'; // Importe QueryResult do 'pg'

@Injectable()
export class MusicaRepository {
  constructor(
    @Inject('DATABASE_POOL')
    private readonly pool: Pool, // Use diretamente o pool injetado
  ) {}

  // busca todas as músicas
  async getAll(): Promise<any> {
    console.log('tenta conectar');
    const client = await this.pool.connect(); // Use connect() para obter uma conexão do pool
    try {
      console.log('conectou no banco');
      const result: QueryResult = await this.pool.query(
        'SELECT * FROM public.musicas',
      );
      console.log('musicas cadastradas:', result);
      return result.rows;
    } finally {
      console.log('fecha conexão com banco');
      client.release();
    }
  }

  async create(data: any): Promise<any> {
    const client = await this.pool.connect();

    const novaMusicaData = data;

    try {
      const { nome, cantor, data, visualizacoes } = novaMusicaData;
      const query =
        'INSERT INTO public.musicas (nome, cantor, data, visualizacoes) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [nome, cantor, data, visualizacoes];
      const result: QueryResult = await client.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Erro ao criar música:', error);
      throw error;
    } finally {
      client.release();
    }
  }
}

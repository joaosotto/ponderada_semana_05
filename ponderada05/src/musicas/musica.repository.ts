import { Injectable, Inject } from '@nestjs/common';
import { Pool, QueryResult } from 'pg'; // Importe QueryResult do 'pg'

@Injectable()
export class MusicaRepository {
  constructor(
    @Inject('DATABASE_POOL')
    private readonly pool: Pool, // Use diretamente o pool injetado
  ) {}

  // busca todas as músicas
  async findAll(): Promise<any> {
    console.log('tenta conectar');
    const client = await this.pool.connect(); // Use connect() para obter uma conexão do pool
    try {
      console.log('conectou no banco');
      const result: QueryResult = await this.pool.query(
        'SELECT * FROM public.musicas',
      );
      return result.rows;
    } finally {
      console.log('fecha conexão com banco');
      client.release();
    }
  }
}

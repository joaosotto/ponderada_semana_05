import { Controller, Get, Post } from '@nestjs/common';
import { MusicaRepository } from './musica.repository';

@Controller()
export class MusicasController {
  constructor(private readonly musicaRepository: MusicaRepository) {}

  @Get('/musicas')
  async getAll(): Promise<any> {
    return this.musicaRepository.findAll();
  }

  @Post('/musicas')
  async create(req: Request, res: Response): Promise<void> {
    const { data } = req.body as any;

    try {
      const novaMusica = await this.musicaRepository.create(data);
      // Definir o status HTTP da resposta
      return novaMusica;
    } catch (error) {
      // Lidar com o erro de alguma forma apropriada
      console.error('Erro ao criar música:', error);
    }
  }
}

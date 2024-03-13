import { Controller, Get, Post } from '@nestjs/common';
import { MusicaRepository } from './musica.repository';

@Controller()
export class MusicasController {
  constructor(private readonly musicaRepository: MusicaRepository) {}

  @Get('/musicas')
  getAll(): any {
    return this.musicaRepository.findAll();
  }
}

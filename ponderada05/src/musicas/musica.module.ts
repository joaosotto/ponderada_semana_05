import { Module } from '@nestjs/common';
import { MusicaRepository } from './musica.repository';
import { MusicasController } from './musica.controller';
import { DatabaseModule } from 'src/db/database.module';

// 'compacta' os modulos de musicas em MusicaModule
@Module({
  imports: [DatabaseModule],
  controllers: [MusicasController],
  providers: [MusicaRepository],
})
export class MusicaModule {}

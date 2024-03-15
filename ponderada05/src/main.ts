import { NestFactory } from '@nestjs/core';
import { MusicaModule } from './musicas/musica.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(MusicaModule);
  await app.listen(5500);

  console.log('http://localhost:5500/musicas');
}
bootstrap();

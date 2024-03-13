// database.module.ts
import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.provider';

@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders], // Exporte os provedores para que possam ser usados em outros módulos
})
export class DatabaseModule {}

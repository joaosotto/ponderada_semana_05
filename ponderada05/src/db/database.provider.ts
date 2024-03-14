import { Provider } from '@nestjs/common';
import { Pool } from 'pg';

export const DatabaseProviders: Provider[] = [
  {
    provide: 'DATABASE_POOL',
    useFactory: async () => {
      const pool = new Pool({
        connectionString:
          'postgres://postgres:4660189p@db-semana5.c74u28y4qg2o.us-east-1.rds.amazonaws.com:5432/postgres',
        ssl: {
          rejectUnauthorized: false,
        },
      });

      return pool;
    },
  },
];

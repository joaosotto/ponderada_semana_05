import { Provider } from '@nestjs/common';
import { Pool } from 'pg';

export const DatabaseProviders: Provider[] = [
  {
    provide: 'DATABASE_POOL',
    useFactory: async () => {
      const pool = new Pool({
        connectionString: process.env.DB_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      });

      return pool;
    },
  },
];

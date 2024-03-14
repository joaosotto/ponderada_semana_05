"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const pg_1 = require("pg");
exports.DatabaseProviders = [
    {
        provide: 'DATABASE_POOL',
        useFactory: async () => {
            const pool = new pg_1.Pool({
                connectionString: 'postgres://postgres:4660189p@db-semana5.c74u28y4qg2o.us-east-1.rds.amazonaws.com:5432/postgres',
                ssl: {
                    rejectUnauthorized: false,
                },
            });
            return pool;
        },
    },
];
//# sourceMappingURL=database.provider.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const pg_1 = require("pg");
exports.DatabaseProviders = [
    {
        provide: 'DATABASE_POOL',
        useFactory: async () => {
            const pool = new pg_1.Pool({
                connectionString: process.env.DB_URL,
                ssl: {
                    rejectUnauthorized: false,
                },
            });
            return pool;
        },
    },
];
//# sourceMappingURL=database.provider.js.map
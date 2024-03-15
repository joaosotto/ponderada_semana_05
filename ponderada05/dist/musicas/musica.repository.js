"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicaRepository = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let MusicaRepository = class MusicaRepository {
    constructor(pool) {
        this.pool = pool;
    }
    async getAll() {
        console.log('tenta conectar');
        const client = await this.pool.connect();
        try {
            console.log('conectou no banco');
            const result = await this.pool.query('SELECT * FROM public.musicas');
            return result.rows;
        }
        finally {
            console.log('fecha conexão com banco');
            client.release();
        }
    }
    async create(data) {
        const client = await this.pool.connect();
        const novaMusicaData = data;
        try {
            const { nome, cantor, data, visualizacoes } = novaMusicaData;
            const query = 'INSERT INTO public.musicas (nome, cantor, data, visualizacoes) VALUES ($1, $2, $3, $4) RETURNING *';
            const values = [nome, cantor, data, visualizacoes];
            const result = await client.query(query, values);
            return result;
        }
        catch (error) {
            console.error('Erro ao criar música:', error);
            throw error;
        }
        finally {
            client.release();
        }
    }
};
exports.MusicaRepository = MusicaRepository;
exports.MusicaRepository = MusicaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_POOL')),
    __metadata("design:paramtypes", [pg_1.Pool])
], MusicaRepository);
//# sourceMappingURL=musica.repository.js.map
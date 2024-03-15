import { Pool } from 'pg';
export declare class MusicaRepository {
    private readonly pool;
    constructor(pool: Pool);
    findAll(): Promise<any>;
    create(data: any): Promise<any>;
}

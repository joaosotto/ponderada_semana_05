import { Pool } from 'pg';
export declare class MusicaRepository {
    private readonly pool;
    constructor(pool: Pool);
    getAll(): Promise<any>;
    create(data: any): Promise<any>;
}

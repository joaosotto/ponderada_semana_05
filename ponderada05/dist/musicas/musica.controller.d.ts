import { MusicaRepository } from './musica.repository';
export declare class MusicasController {
    private readonly musicaRepository;
    constructor(musicaRepository: MusicaRepository);
    getAll(): Promise<any>;
    create(req: Request, res: Response): Promise<void>;
}

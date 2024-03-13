import { MusicaRepository } from './musica.repository';
export declare class MusicasController {
    private readonly musicaRepository;
    constructor(musicaRepository: MusicaRepository);
    getAll(): any;
}

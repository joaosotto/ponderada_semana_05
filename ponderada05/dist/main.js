"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const musica_module_1 = require("./musicas/musica.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(musica_module_1.MusicaModule);
    await app.listen(5050);
}
bootstrap();
//# sourceMappingURL=main.js.map
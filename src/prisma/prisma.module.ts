import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <--- Importante: Isso torna o módulo visível em todo o projeto sem precisar importar em cada lugar
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <--- Exporta o serviço para que outros usem
})
export class PrismaModule {}
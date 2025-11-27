import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // 1. A aplicação é criada aqui. A variável 'app' nasce aqui.
  const app = await NestFactory.create(AppModule);

  // 2. O Swagger deve ser configurado DEPOIS de criar o app e ANTES do app.listen
  const config = new DocumentBuilder()
    .setTitle('API de Usuários')
    .setDescription('Gerenciamento de usuários do sistema')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 3. Inicia o servidor
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
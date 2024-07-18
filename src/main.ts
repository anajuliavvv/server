import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Permite todas as origens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Permite todos os métodos HTTP
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(3500);
}
bootstrap();

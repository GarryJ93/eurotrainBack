import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(compression());
  const config = new DocumentBuilder()
    .setTitle('Euro Train')
    .setDescription("Description des requêtes du projet chef d'oeuvre")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();

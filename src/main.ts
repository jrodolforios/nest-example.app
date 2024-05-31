import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { SetupSwagger } from './core/services/swagger.service';
import { CustomExceptionFilter } from './core/filters/customExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const environment = process.env.NODE_ENV || 'dev';
  const envFile = environment === 'production' ? '.env' : `.env.${environment}`;
  dotenv.config({ path: envFile });
  const port = process.env.PORT || 3000;
  const options = new DocumentBuilder()
    .setTitle('Example API BFF')
    .setDescription('Bff Example API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document, SetupSwagger());
  await app.listen(port);
  console.log(`Application is running on: ${port}`);
}
bootstrap();

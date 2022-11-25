import { NestFactory } from '@nestjs/core';
import { AppModule } from './station.module';

async function bootstrap() {

  const port = process.env.PORT; //3000 for postman
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

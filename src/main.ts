import { NestFactory } from '@nestjs/core';
import { AppModule } from './station.module';

async function bootstrap() {

  const port = 3000 //process.env.PORT; //to deploy
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

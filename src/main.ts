import { NestFactory } from '@nestjs/core';
import { AppModule } from './station.module';

async function bootstrap() {
<<<<<<< HEAD
  const port = process.env.PORT; //3000 for postman
=======
  const port = process.env.PORT; //3000
>>>>>>> 999adf3522e3c93e9a6fcfc9826491405cb17820
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

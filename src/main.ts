import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  return app;
}

async function start() {
  const PORT = process.env.PORT || 3000;
  console.log(process.env.DB_URL);
  const app = await bootstrap();

  await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT: ${PORT}`));
}

start().catch((error) => console.error(error));

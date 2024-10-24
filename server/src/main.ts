import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 5012;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle("Project Hermes")
      .setDescription("Documentation REST API")
      .setVersion("1.0.0")
      .addTag("Observersss")
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs',app,document)

  await app.listen(PORT, () => {console.log(`Server started on ${PORT} port`)});
}


bootstrap();

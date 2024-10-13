import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath:'.env'
      }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [],
        autoLoadModels:true,
      }),
      UsersModule,],
})
export class AppModule {}
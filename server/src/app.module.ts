import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { QuotesModule } from './quotes/quotes.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { StatisticsModule } from './statistics/statistics.module';

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
      UsersModule,
      QuotesModule,
      LeaderboardModule,
      StatisticsModule,],
})
export class AppModule {}

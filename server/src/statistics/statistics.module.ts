import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Statistics} from "../database/statistics.model";

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
  imports:[
    SequelizeModule.forFeature([Statistics])
  ]
})
export class StatisticsModule {}

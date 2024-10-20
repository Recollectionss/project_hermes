import { Module } from '@nestjs/common';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Leaderboard} from "../database/leaderboard.model";

@Module({
  controllers: [LeaderboardController],
  providers: [LeaderboardService],
  imports:[
    SequelizeModule.forFeature([Leaderboard])
  ]
})
export class LeaderboardModule {}

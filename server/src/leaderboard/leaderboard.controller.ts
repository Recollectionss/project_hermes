import {Body, Controller, Get, Post} from '@nestjs/common';
import {LeaderboardService} from "./leaderboard.service";
import {CreateLeaderboardDto} from "./dto/create-leaderboard.dto";

@Controller('leaderboard')
export class LeaderboardController {

    constructor(private leaderboardService: LeaderboardService) {}

    @Get('/')
    get(){
        return this.leaderboardService.get();
    }

    @Post('/')
    create(@Body() dto:CreateLeaderboardDto){
        return this.leaderboardService.create(dto);
    }

}

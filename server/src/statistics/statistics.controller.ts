import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {StatisticsService} from "./statistics.service";
import {CreateStatisticsDto} from "./dto/create-statistics.dto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Statistics} from "../database/statistics.model";

@Controller('statistics')
export class StatisticsController {

    constructor(private statisticsService: StatisticsService) {}

    @ApiOperation({summary:"get statistics"})
    @ApiResponse({status:200, type:Statistics})
    @Get("/:id")
    get(@Param("/:id")id:number){
        return this.statisticsService.get(id);
    }

    @ApiOperation({summary:"get all statistics about this user"})
    @ApiResponse({status:200, type:[Statistics]})
    @Get('/all/:userId')
    getAll(@Param('userId', ParseIntPipe) userId : number){
        return this.statisticsService.getAll(userId);
    }

    @ApiOperation({summary:"create new statistics field"})
    @ApiResponse({status:200})
    @Post("/")
    create(@Body() statisticsDto: CreateStatisticsDto){
        return this.statisticsService.create(statisticsDto);
    }
}

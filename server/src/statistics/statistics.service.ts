import { Injectable } from '@nestjs/common';
import {CreateStatisticsDto} from "./dto/create-statistics.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Statistics} from "../database/statistics.model";

@Injectable()
export class StatisticsService {

    constructor(@InjectModel(Statistics) private statisticRepository: typeof Statistics) {}

    async get(id:number){
        return await this.statisticRepository.findByPk(id)
    }


    async getAll(userId:number){
        return await this.statisticRepository.findAll({where:{userId: userId}})
    }

    async create(dto:CreateStatisticsDto){
        return  await this.statisticRepository.create(dto);
    }
}

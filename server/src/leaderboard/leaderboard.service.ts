import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Leaderboard} from "../database/leaderboard.model";
import {CreateLeaderboardDto} from "./dto/create-leaderboard.dto";
import {User} from "../database/user.model";

@Injectable()
export class LeaderboardService {

    constructor(
        @InjectModel(Leaderboard) private leaderboardRepository : typeof Leaderboard,
        @InjectModel(User) private userRepository: typeof User
    ) {}

    async get(){
        return await this.leaderboardRepository.findAll();
    }

    async create(dto:CreateLeaderboardDto){
        const userMatch = await this.userRepository.findByPk(dto.userId);

        const leaderboard = await this.leaderboardRepository.findAll({
            order: [
            ['totalCharactersTyped', 'DESC']
            ],
            limit:100
        });

        const existingEntry = leaderboard.find(entry => dto.userId === entry.userId);

        if(existingEntry){
            await this.leaderboardRepository.update(
                {totalCharactersTyped: dto.totalCharactersTyped},
                {where: {id: existingEntry.id}, returning: false}
                );
        }else{
            const lastEntry = leaderboard[leaderboard.length -1];

            if(leaderboard.length < 100 || dto.totalCharactersTyped > lastEntry.totalCharactersTyped){
                await this.leaderboardRepository.create(dto);
            }

            if (leaderboard.length >= 100) {
                const lowestEntry = leaderboard[leaderboard.length - 1];
                await this.leaderboardRepository.destroy({ where: { id: lowestEntry.id } });
            }
        }
    }
}

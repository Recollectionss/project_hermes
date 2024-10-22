import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';
import {ApiProperty} from "@nestjs/swagger";

interface LeaderboardCreateAttribute {
    userId:number;
    username:string;
    totalCharactersTyped:number;
}

@Table({ tableName: 'leaderboard', timestamps: false })
export class Leaderboard extends Model<Leaderboard, LeaderboardCreateAttribute> {

    @ApiProperty({example:'1', description:'id'})
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({example:'1', description:'userId'})
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    userId: number;

    @ApiProperty({example:'Viktor', description:'username'})
    @Column({ type: DataType.STRING(255), allowNull: false })
    username: string;

    @ApiProperty({example:'1000', description:'totalCharactersTyped'})
    @Column({ type: DataType.INTEGER, allowNull: false })
    totalCharactersTyped: number;
}

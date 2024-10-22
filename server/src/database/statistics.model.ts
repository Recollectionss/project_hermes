import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';
import {ApiProperty} from "@nestjs/swagger"; // Подключаем модель пользователя

interface StatisticsCreateAttribute {
    userId:number;
    characterTypes:number;
    accuracy:number;
}

@Table({ tableName: 'statistics', timestamps: false })
export class Statistics extends Model<Statistics,StatisticsCreateAttribute> {
    @ApiProperty({example:'1', description:'id'})
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ApiProperty({example:'1', description:'userId'})
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @ApiProperty({example:'1', description:'charactersTyped'})
    @Column({ type: DataType.INTEGER, allowNull: false })
    charactersTyped: number;

    @ApiProperty({example:'87', description:'accuracy'})
    @Column({ type: DataType.DECIMAL(5, 2), allowNull: false })
    accuracy: number;

    @ApiProperty({example:'87', description:'2024/11/11 23:00:00'})
    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    sessionDate: Date;
}

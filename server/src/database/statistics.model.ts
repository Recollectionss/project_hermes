import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model'; // Подключаем модель пользователя

interface StatisticsCreateAttribute {
    userId:number;
    characterTypes:number;
    accuracy:number;
}

@Table({ tableName: 'statistics', timestamps: false })
export class Statistics extends Model<Statistics,StatisticsCreateAttribute> {

    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    userId: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    charactersTyped: number;

    @Column({ type: DataType.DECIMAL(5, 2), allowNull: false })
    accuracy: number;

    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    sessionDate: Date;
}

import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user.model';

interface LeaderboardCreateAttribute {
    userId:number;
    username:string;
    totalCharactersTyped:number;
}

@Table({ tableName: 'leaderboard', timestamps: false })
export class Leaderboard extends Model<Leaderboard, LeaderboardCreateAttribute> {

    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
    userId: number;  // Внешний ключ на пользователя

    @Column({ type: DataType.STRING(255), allowNull: false })
    username: string;  // Имя пользователя

    @Column({ type: DataType.INTEGER, allowNull: false })
    totalCharactersTyped: number;  // Общее количество символов
}

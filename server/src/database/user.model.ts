import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreateAttribute{
    username:string;
    password:string;
    email?:string;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreateAttribute> {
    @ApiProperty({example:'1', description:'id'})
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;

    @ApiProperty({example:'example', description:'username'})
    @Column({type:DataType.STRING, unique:true, allowNull:false})
    username: string;

    @ApiProperty({example:'12345', description:'password'})
    @Column({type:DataType.STRING, allowNull:false})
    password:string;

    @ApiProperty({example:'example@gmail.com', description:'email'})
    @Column({type:DataType.STRING, unique:true, allowNull:true})
    email:string;

    @ApiProperty({example:'false', description:'Indicates if the entity is deleted'})
    @Column({type:DataType.BOOLEAN, defaultValue: false})
    isDelete:boolean;
}
import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto{

    @ApiProperty({example:1, description:"id"})
    readonly id:number;

    @ApiProperty({example:'example', description:'username'})
    readonly username: string;

    @ApiProperty({example:'12345', description:'password'})
    readonly password:string;

    @ApiProperty({example:'example@gmail.com', description:'email'})
    readonly email?:string;
}
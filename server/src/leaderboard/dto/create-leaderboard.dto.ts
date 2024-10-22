import {ApiProperty} from "@nestjs/swagger";

export class CreateLeaderboardDto{

    @ApiProperty({example:'1', description:'userId'})
    readonly userId : number;

    @ApiProperty({example:'name123', description:'username'})
    readonly username : string;

    @ApiProperty({example:'132', description:'totalCharactersTyped'})
    readonly totalCharactersTyped : number;
}
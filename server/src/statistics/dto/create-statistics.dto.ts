import {ApiProperty} from "@nestjs/swagger";

export class CreateStatisticsDto{

    @ApiProperty({example:'1', description:'userId'})
    readonly userId : number;

    @ApiProperty({example:'124', description:'charactersTyped'})
    readonly charactersTyped : number;

    @ApiProperty({example:'84.21', description:'accuracy'})
    readonly accuracy : number;

}
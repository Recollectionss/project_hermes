import {Controller, Get} from '@nestjs/common';
import {QuotesService} from "./quotes.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {

    constructor(private quotesService : QuotesService) {}

    @ApiOperation({summary:"get text from baconipsum.com"})
    @ApiResponse({status:200, type:String})
    @Get()
    async getText(){
        return this.quotesService.getText();
    }
}

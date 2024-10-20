import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../database/user.model";
import {UpdateUserDto} from "./dto/update-user.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({summary:"get user"})
    @ApiResponse({status:200, type:User})
    @Get(`:id`)
    read(@Param('id', ParseIntPipe) id: number){
        return this.userService.selectUser(id);
    }

    @ApiOperation({summary:"create user"})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary:"update info about user"})
    @ApiResponse({status:200, type:User})
    @Put('/update')
    update(@Body() userDto: UpdateUserDto){
        return this.userService.updateUser(userDto)
    }

    @ApiOperation({summary: " delete user"})
    @ApiResponse({status:200})
    @Delete(":id")
    delete(@Param('id',ParseIntPipe) id: number){
        return this.userService.deleteUser(id);
    }
}

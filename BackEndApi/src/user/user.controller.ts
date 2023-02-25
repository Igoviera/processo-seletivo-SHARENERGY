import { Controller,Post, Body, Get, Param } from '@nestjs/common';
import { userDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() user: userDto){
        return await this.userService.create(user)
    }

    @Get('username')
    async findUserName(@Param('username') username: string ){
        return await this.userService.findUserByUsername(username)
    }
}

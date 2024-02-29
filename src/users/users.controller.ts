import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() createDto: CreateUserDto) {
        return this.userService.create(createDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }
}

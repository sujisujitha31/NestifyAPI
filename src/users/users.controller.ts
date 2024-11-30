import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {


    @Get()
    findAllUsers()
    {
        return "find all users";
    }
    @Get('interns')
    findAllinterns()
    {
        return [];
    }
    @Get(':id')
    findSingleUser(@Param('id') id:string)
    {
        return {id};
    }

 
}

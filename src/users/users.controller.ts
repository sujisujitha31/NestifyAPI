import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { get } from 'http';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {

constructor(private readonly userService:UsersService)
{

}
    @Get()
    findAllUsers(@Query('role') role?: "ADMIN"|"INTERN")
    {
      return this.userService.findAll(role);
    }
    @Get(':id')
   findOneUser(@Param('id') id:number)
   {
return this.userService.findOne(id);
   }
    @Get(':id')
    findSingleUser(@Param('id') id:string)
    {
        return {id};
    }

 @Post()
 createUser(@Body() user:{})
 {
return user;
 }

 @Patch(":id")
 updateUser(@Param("id") id:string,@Body() userData:{})
 {
    return {id,...userData};
 }

 @Delete(":id")
deleteTheUser(@Param("id") myParam:string)
{
    return {myParam};
}

}

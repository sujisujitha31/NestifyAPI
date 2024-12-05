import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { query } from 'express';
import { get } from 'http';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }
    @Get()
    findAllUsers(@Query('role') role?: "ADMIN" | "INTERN") {

        return this.userService.findAll(role);
    }

    @Get(':id')
    findOneUser(@Param('id',ParseIntPipe) id: number) {
        console.log("i got this function");
        return this.userService.findOne(id);
    }



    @Post()
    createUser(@Body() user: { name: string, email: string, role: "ADMIN" | "INTERN" | "ENGINEER" }) {
        return this.userService.create(user);
    }

    @Patch(":id")
    updateUser(@Param("id",ParseIntPipe) id: number, @Body() userData: { name?: string, email?: string, role?: "ADMIN" | "INTERN" | "ENGINEER" }) {
        return this.userService.update(id, userData);
    }

    @Delete(":id")
    deleteTheUser(@Param("id",ParseIntPipe) myParam: number) {
        return this.userService.deleteUser(myParam);
    }

}

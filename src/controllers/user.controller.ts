import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UserService } from 'src/services/user.service';
import { User } from 'src/entities/user.entity';

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUsers(): User[] {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): User {
        const user = this.userService.getUserById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    @Post()
    createUser(@Body() user: User): User {
        return this.userService.createUser(user.name, user.email, user.password);
    }

    @Put(':id')
    updateUser(
        @Param('id') id: number,
        @Body() user: User,
    ): User {
        const updatedUser = this.userService.updateUser(id, user.name, user.email, user.password);
        if (!updatedUser) {
            throw new NotFoundException('User not found');
        }
        return updatedUser;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): void {
        this.userService.deleteUser(id);
    }
}
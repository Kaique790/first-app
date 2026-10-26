import { Body, Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { type User, UserService } from './user.service.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Post()
  addUser(@Body() newUser: User): User {
    return this.userService.addUser(newUser);
  }

  @Put()
  editUser(@Body() body: { id: number; newData: User }): User {
    return this.userService.editUser(body.id, body.newData);
  }
}

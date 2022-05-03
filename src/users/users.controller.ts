import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Users } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @HttpCode(201)
  createUser(@Body() user: Users): Promise<Users> {
    return this.userService.createUser(user);
  }

  @Get()
  getUsers(
    @Query('page') page: string,
    @Query('take') take: string,
  ): Promise<Users[]> {
    return this.userService.findAllUser(+page, +take);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<Users> {
    return this.userService.deleteUser(+id);
  }

  @Put()
  updateUser(@Body() user: Users): Promise<Users> {
    return this.userService.updateUser(user);
  }
}

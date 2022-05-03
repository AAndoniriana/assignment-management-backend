import { Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * Method to create an user
   * @param user User to create
   * @returns The user created
   */
  createUser(user: Prisma.UsersCreateInput): Promise<Users> {
    return this.prisma.users.create({
      data: user,
    });
  }

  /**
   * Method to find all the users
   * @param page The page number
   * @param take Number of page element
   * @returns List of user
   */
  findAllUser(page: number, take: number): Promise<Users[]> {
    return this.prisma.users.findMany({
      skip: (page - 1) * take,
      take,
    });
  }

  /**
   * Method to delete an user
   * @param id Id of the user to delete
   * @returns The user deleted
   */
  deleteUser(id: number): Promise<Users> {
    return this.prisma.users.delete({
      where: {
        id,
      },
    });
  }

  /**
   * Method to update user
   * @param user User to update
   * @returns The updated user
   */
  updateUser(user: Users): Promise<Users> {
    return this.prisma.users.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }
}

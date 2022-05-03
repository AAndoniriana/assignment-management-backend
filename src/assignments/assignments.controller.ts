import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get()
  findAll(): string {
    return 'Get all assignments';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `assignment with id: ${id}`;
  }
}

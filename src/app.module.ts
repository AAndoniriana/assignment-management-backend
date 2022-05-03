import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AssignmentsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

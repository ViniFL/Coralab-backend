import { Module } from '@nestjs/common';
import { TaskController } from 'src/controllers/task.controller';

@Module({
    controllers: [TaskController]
})
export class TaskModule {
}
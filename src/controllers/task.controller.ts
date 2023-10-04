import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { TaskService } from 'src/services/task.service';

@Controller('/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {
    }

    @Get()
    getAllTasks(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    getTaskById(@Param('id') id: number): Promise<Task | undefined> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    createTask(@Body() task: Task): Promise<Task> {
        return this.taskService.createTask(task.title, task.description);
    }

    @Put(':id')
    updateTask(
        @Param('id') id: number,
        @Body() task: Task,
    ): Promise<Task> {
        return this.taskService.updateTask(id, task.title, task.description);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: number): Promise<void> {
        return this.taskService.deleteTask(id);
    }


}
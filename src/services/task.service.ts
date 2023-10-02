import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Task } from "src/entities/task.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    findAll(): Promise<Task[]> {
        return this.taskRepository.find();
      }

    async getTaskById(id: number): Promise<Task | undefined> {
        const task = await this.taskRepository.findOne({ where: {id} });
        if (!task) {
          throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }
      
    async createTask(title: string, description: string): Promise<Task> {
        const newTask = this.taskRepository.create({ title, description });
        return await this.taskRepository.save(newTask);
    }

    async deleteTask(id: number): Promise<void> {
        const task = await this.taskRepository.findOne({ where: {id} });
        if (!task) {
          throw new NotFoundException(`Task with ID ${id} not found`);
        }
        await this.taskRepository.remove(task);
    }

    async updateTask(id: number, title: string, description: string): Promise<Task> {
        const task = await this.taskRepository.findOne({ where: {id} });
        if (!task) {
          throw new NotFoundException(`Task with ID ${id} not found`);
        }

        task.title = title;
        task.description = description;

        return await this.taskRepository.save(task);
    }
    
}

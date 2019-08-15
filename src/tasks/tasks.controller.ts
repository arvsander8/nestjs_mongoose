import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CreateTaskDto } from "./dto/create-task.dto";

import { TasksService } from "./tasks.service";
import  { Task } from "./interfaces/Task";

@Controller('tasks')
export class TasksController {
    
    constructor(private taskService: TasksService){}
    
    @Get()
    getTasks(): Task[]{
        return this.taskService.getTasks();
    }
    
    @Get(':idTask')
    getTask(@Param('idTask') idTask): Task{
        return this.taskService.getTask(parseInt(idTask));
    }

    @Post()
    createTask(@Body() task:CreateTaskDto): string{
        console.log(task.description);
        return 'Creating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number: ${id}`;
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id): string{
        console.log(task);
        console.log(id);
        return 'Updating a task';
    }
    
}

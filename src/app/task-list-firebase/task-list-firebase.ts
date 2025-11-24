import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Task} from '../Models/Task';
import {TasksServices} from "../services/tasks.services";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-task-list-firebase',
    imports: [FormsModule, DatePipe],
    templateUrl: './task-list-firebase.html',
})
export class TaskListFirebase {
    tasksService = inject(TasksServices)
    title: string = "";
    tasks = this.tasksService.tasks;

    async addTask() {
        try {
            await this.tasksService.addTask(this.title);
            this.title = "";
        } catch (e) {
            console.error(e);
        }
    }

    async toggleTask(task: Task) {
        try {
            task.completed = !task.completed;
            await this.tasksService.updateTask(task);
        } catch (e) {
            console.error(e);
        }
    }

    async deleteTask(task: Task) {
        try {
            await this.tasksService.deleteTask(task);
        } catch (e) {
            console.error(e);
        }
    }
}

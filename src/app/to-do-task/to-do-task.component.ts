import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { AddTaskComponent } from '../add-task/add-task.component';

import { FormControl } from '../../../node_modules/@angular/forms';
import { HttpService } from '../services/http.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { routeSlideStateTrigger, routeFadeStateTrigger } from '../../shared/route-animations';


@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css'],
  animations: [
    routeSlideStateTrigger,
    routeFadeStateTrigger
  ]
})
export class ToDoTaskComponent {

  public tasksList: Array<Task> = [];
  public statusForm = new FormControl('');
  private isDisabled = true;
  private checkboxList: Array<Task> = [];

  constructor(private taskService: TaskService, private http: HttpService, private spinner: NgxSpinnerService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(e => e.isDone === false);
    });
  }

  takeTask(task: Task) {
    this.checkboxList.push(task);
  }

  doneChecked() {
    this.taskService.doneChecked(this.checkboxList);
  }

  done(task: Task) {
    this.taskService.done(task);
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

  removeChecked() {
 this.taskService.removeChecked(this.checkboxList);
// console.log(this.checkboxList);
  }

  saveTaskinDb() {
    this.taskService.saveTaskinDb();
  }

  updateStatus(task: Task) {
    const status = this.statusForm.value;
    this.taskService.updateStatus(task, status);
  }
}

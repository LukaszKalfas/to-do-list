import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { FormControl, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { routeFadeStateTrigger } from '../../shared/route-animations';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class AddTaskComponent {


  constructor(private taskService: TaskService) { }

  public availableStatus: Array<string> = this.taskService.getStatus();

  public newTaskForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    status: new FormControl(this.availableStatus[0])
  });

  onCreateTask() {
    const task: Task = ({
      name: this.newTaskForm.value.name,
      description: this.newTaskForm.value.description,
      created: new Date().toLocaleString(),
      status: this.newTaskForm.value.status,
      isDone: false
    });
    this.taskService.onCreateTask(task);
    this.newTaskForm.reset({
      status: this.availableStatus[0]
    });

  }
}

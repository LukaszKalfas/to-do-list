import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from 'src/app/models/task';
import { Observable, Observer } from '../../../node_modules/rxjs';
import { routeSlideStateTrigger } from '../../shared/route-animations';


@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css'],
  animations: [
    routeSlideStateTrigger
  ]
})
export class DoneTaskComponent implements OnInit {
  public tasksDoneList: Array<Task> = [];
  private date = new Date().toDateString();
  constructor(private taskService: TaskService) {
    taskService.getTasksListObs().subscribe((tasksDone: Array<Task>) => {
      this.tasksDoneList = tasksDone.filter(e => e.isDone === true);
    });
  }

  ngOnInit() {
// this.taskService.loadProjects().subscribe((task: Array<Task>) => {
//   this.tasksDoneList;
//   }
  }
  remove(task: Task) {
    this.taskService.remove(task);
  }

  saveTaskinDb() {
    this.taskService.saveTaskinDb();
  }

  removeAll() {
    this.taskService.removeAll();

  }
}

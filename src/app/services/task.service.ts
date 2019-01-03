import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs/internal/BehaviorSubject';
import { Task } from '../models/task';
import { HttpService } from './http.service';
import { Observable, Observer } from '../../../node_modules/rxjs';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  public availableStatus = [
    'active',
    'inactive',
    'critical'
  ];
  private removedChecked;
  public showSpinner = true;
  getStatus() {
    return this.availableStatus;
  }

  constructor(private http: HttpService, private spinner: NgxSpinnerService) {
    this.http.getTask().subscribe(tasks => {
      this.tasksListObs.next(tasks);
    });
  }


  onCreateTask(task: Task) {
    const tasksList = this.tasksListObs.getValue();
    tasksList.push(task);
    this.tasksListObs.next(tasksList);
    this.saveTaskinDb();
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    this.saveTaskinDb();
  }

  doneChecked(checkedList: Array<Task>) {
    for (const task of checkedList) {
      task.isDone = true;
      task.end = new Date().toLocaleString();
    }
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    this.saveTaskinDb();
  }



  remove(task: Task) {
    const removeTask = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(removeTask);
    this.saveTaskinDb();


  }
  removeChecked(checkboxList: Array<Task>) {
    const listobs = this.tasksListObs.getValue();
    for (const task of listobs) {
      for (const taskRemove of checkboxList) {
        if (task === taskRemove) {
          this.remove(task);
        }
      }
    }
  }

  removeAll() {
    const removeAllDone = this.tasksListObs.getValue().filter(e => e.isDone === false);
    this.tasksListObs.next(removeAllDone);
    this.saveTaskinDb();
  }

  updateStatus(task, status) {
    task.status = status;
    console.log(task, status);
    this.saveTaskinDb();
  }

  getTasksListObs() {
    return this.tasksListObs.asObservable();
  }

  saveTaskinDb() {
    this.http.saveTasks(this.tasksListObs.getValue());
  }
}
